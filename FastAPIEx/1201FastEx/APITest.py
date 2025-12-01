from fastapi import APIRouter, Query
from Model import Todo

router = APIRouter()

todo_list = []

@router.get("/say")
async def say_hello():
    return {"message": "Hello 3!"}

@router.post("/todo")
async def add_todo(todo:Todo):
    todo_list.append(todo)
    return{
        "message":"Todo added successfully"
    }

@router.get("/todo")
async def retrieve_todos() -> dict:
    return{
        "todos": todo_list
    }
@router.get("/plus/{a}/{b}")
async def add_plus(a:int, b:int):
    return {"result": a + b}

@router.get("/multiply")
async def query_process(a:int = Query(None), b:int = Query(None)):
    return{
        "result": a * b
    }
