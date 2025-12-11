
from database import engine, Base, get_db
from models import User
from models import Board
from fastapi import FastAPI, Depends, Request, HTTPException, status
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.sessions import SessionMiddleware

app = FastAPI()

app.add_middleware(
  SessionMiddleware,
  secret_key="helloword",
    max_age=86400,
  same_site="none",
  https_only= True,
)

origins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173"
]

app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

@app.post("/login")
async def doLogin(request: Request, db: Session = Depends(get_db)):
    data = await request.json()
    loginid = data.get("loginid")
    password = data.get("password")
    person = db.query(User).filter(User.loginid == loginid, User.password == password).first()
    if person:
        request.session['loginid'] = loginid
        return {"result": "success", "message" : "login success"}
    return {"result": "fail", "message": "login failed"}

@app.post("/writing")
async def doWriting(request: Request, db: Session = Depends(get_db)):
    loginid = request.session.get("loginid")

    data = await request.json()
    title = data.get("title")
    content = data.get("content")

    try:
        board = Board(title=title, content=content, writer=loginid)
        db.add(board)
        db.commit()
        db.refresh(board)
        return { "result": "ok"}
    except Exception as e:
        print(e)
        return { "result": "fail"}



@app.get("/boards")
async def doWriting(request: Request, db: Session = Depends(get_db)):
    boards = db.query(Board).order_by(Board.created).all()
    return boards
@app.get("/checkLogin")
async def checklogin(request: Request, db: Session = Depends(get_db)):
    if request.session.get('loginid'):
        return{"result" : "ok"}
    return {"result" : "fail"}
@app.get("/logout")
async def logout(request: Request, db: Session = Depends(get_db)):
    request.session.clear()
    return {"result": "success"}

@app.post("/signup")
async def signup(request: Request, db: Session = Depends(get_db)):
    data = await request.json()
    loginid = data.get("loginid")
    password = data.get("password")
    print(loginid, password)
    try:
        user = User(loginid=loginid, password=password)
        db.add(user)
        db.commit()
        db.refresh(user)
        return { "result": "ok"}
    except Exception as e:
        print(e)
        return { "result": "fail"}
@app.get("/user")
async def getList(db:Session = Depends(get_db)):
  users = db.query(User).all()
  return users

@app.get("/user/{id}")
async def getOne(id:int, db:Session = Depends(get_db)):
  user = db.query(User).filter(User.id == id).first()
  return user # {id:xxx,name:'xxxx',gender:'....',mobile:'....'}

@app.put("/user/{id}/{name}/{gender}/{mobile}")
async def update(id:  int, name: str, gender: str, mobile: str, db:Session = Depends(get_db)):
  user = db.query(User).filter(User.id == id).first()
  user.name = name
  user.gender = gender
  user.mobile = mobile
  db.commit()
  db.refresh(user)
  return {"message":"ok"}

@app.delete("/user/{id}")
async def delete(id:int, db:Session = Depends(get_db)):
  user = db.query(User).filter(User.id == id).first()
  db.delete(user)
  db.commit()