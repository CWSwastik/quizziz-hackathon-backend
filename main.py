from fastapi import FastAPI
from routes import session, characters

app = FastAPI(title="PersonaEd API")

# Include routers
app.include_router(session.router, prefix="/session", tags=["Session"])
# app.include_router(pdf.router, prefix="/pdf", tags=["PDF"])
app.include_router(characters.router, prefix="/characters", tags=["Characters"])


@app.get("/")
def home():
    return {"message": "Welcome to the PersonaEd API"}
