from fastapi import APIRouter

router = APIRouter()

characters = ["Sherlock Holmes", "Albert Einstein", "Harry Potter", "Yoda"]


@router.get("/", response_model=dict)
def list_characters():
    return {"characters": characters}
