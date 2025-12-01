from pydantic import BaseModel

class TodoItem(BaseModel):
    id:int
    title:str
    done:bool = False