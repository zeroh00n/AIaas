from fastapi import FastAPI
from routers import router

app = FastAPI(title = "hihi")

app.include_router(router)