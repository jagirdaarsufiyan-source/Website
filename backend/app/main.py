from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .config import get_settings
from .database import Base, engine
from .routers import admin, auth, public


settings = get_settings()
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Viznous IT Technologies API",
    description="REST API for Viznous IT Technologies Private Limited website and admin dashboard.",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(auth.router, prefix="/api")
app.include_router(public.router, prefix="/api")
app.include_router(admin.router, prefix="/api")


@app.get("/health")
def health_check():
    return {"status": "ok", "company": "Viznous IT Technologies Private Limited"}
