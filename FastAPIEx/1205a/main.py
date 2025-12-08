from fastapi import FastAPI
from database import engine, Base, get_db
from models import User
from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

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

@app.get("/user")
async def getList(db:Session = Depends(get_db)):
  users = db.query(User).all()
  return users

@app.get("/user/{id}")
async def getOne(id:int, db:Session = Depends(get_db)):
  user = db.query(User).filter(User.id == id).first()
  return user # {id:xxx,name:'xxxx',gender:'....',mobile:'....'}

@app.post("/user/{name}/{gender}/{mobile}")
async def insert(name: str, gender: str, mobile: str,db:Session = Depends(get_db)):
  user = User(name=name,gender=gender,mobile=mobile)
  db.add(user)
  db.commit()
  db.refresh(user)
  return {"message": "ok"}

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