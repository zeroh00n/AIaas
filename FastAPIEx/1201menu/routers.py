from fastapi import APIRouter, Path, HTTPException
from starlette import status

from menu_model import MenuItem
from typing import List

router = APIRouter()

menu_list = []

@router.post("/menu", status_code=201)
async def create_menu(menu: MenuItem):
    for m in menu_list:
        if m.menu_number == menu.menu_number:
            raise HTTPException("menunumber already exists")
    menu_list.append(menu)
    return menu

@router.get("/menu")
async def get_menu():
    return menu_list




@router.get("/menu/{menu_number}")
async def get_menu(menu_number: int):
    for m in menu_list:
        if m.menu_number == menu_number:
            return m

@router.put("/menu/{menu_number}")
async def update_menu(menu_data:MenuItem, menu_number: int = Path(...,title = "The ID of the menu to be update")):
    for m in menu_list:
        if m.menu_number == menu_number:
            m.menu_name = menu_data.menu_name
            m.menu_price = menu_data.menu_price

            print(f"PUT /menu/{menu_number} -> current menu_list:", menu_list)
            return{
                "message": "success"
            }
    return{
        "message": "menu update failed"
    }
@router.delete("/menu/{menu_number}")
async def delete_menu(menu_number: int):
    for index in range(len(menu_list)):
        menu = menu_list[index]
        if menu.menu_number == menu_number:
            menu_list.pop(index)
