from fastapi import FastAPI
from routes import session, characters
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="PersonaEd API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Include routers
app.include_router(session.router, prefix="/session", tags=["Session"])
# app.include_router(pdf.router, prefix="/pdf", tags=["PDF"])
app.include_router(characters.router, prefix="/characters", tags=["Characters"])


@app.get("/")
def home():
    return {"message": "Welcome to the PersonaEd API"}
