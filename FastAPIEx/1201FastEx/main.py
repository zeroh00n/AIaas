from fastapi import FastAPI
from APITest import router

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Hello ii"}

@app.get("/")
async def root() -> dict:
    return {"message": "Hello 22!"}

app.include_router(router)