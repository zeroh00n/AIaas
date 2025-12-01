from routerEx import router
from fastapi import FastAPI
app = FastAPI(title="Simple API")

app.include_router(router)