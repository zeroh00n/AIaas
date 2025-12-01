from pydantic import BaseModel

class MenuItem(BaseModel):
    menu_number: int
    menu_name: str
    menu_price: int