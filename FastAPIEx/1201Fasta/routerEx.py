from fastapi import APIRouter,HTTPException
from typing import List
from model import TodoItem

router = APIRouter()

todo_list: List[TodoItem] = []

@router.post("/todos", response_model=TodoItem, status_code=201)
def create_todo(todo: TodoItem):
    for t in todo_list:
        if t.id == todo.id:
            raise HTTPException(status_code=400, detail="Todo ID already exists")
    todo_list.append(todo)
    return todo
@router.get("/todos", response_model=List[TodoItem])
def get_todos():
    return todo_list

@router.get("/todos/{todo_id}", response_model=TodoItem)
def get_todo(todo_id: int):
    for todo in todo_list:
        if todo.id == todo_id:
            return todo
    raise HTTPException(status_code=404, detail="Todo not found")

@router.put ("/todos/{todo_id}", response_model=TodoItem)
def update_todo(todo_id:int, updated_todo:TodoItem):
    for index, todo in enumerate(todo_list):
        if todo.id == todo_id:
            todo_list[index] = updated_todo
            return updated_todo
    raise HTTPException(status_code=404, detail="Todo not found")

@router.delete("/todos/{todo_id}", status_code=204)
def delete_todo(todo_id: int):
    for index, todo in enumerate(todo_list):
        if todo.id == todo_id:
            todo_list.pop(index)
            return
    raise HTTPException(status_code=404, detail="Todo not found")