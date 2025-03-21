from fastapi import APIRouter
from models.schemas import Character

router = APIRouter()

characters = [
    Character(
        name="Hermione",
        voice_id="Joanna",
        thinking_photo="https://interactive-learning-api.s3.amazonaws.com/alice_thinking.jpg",
        teaching_photo="https://interactive-learning-api.s3.amazonaws.com/alice_teaching.jpg",
        listening_photo="https://interactive-learning-api.s3.amazonaws.com/alice_listening.jpg",
    ),
    Character(
        name="Sherlock Holmes",
        voice_id="Matthew",
        thinking_photo="https://interactive-learning-api.s3.amazonaws.com/bob_thinking.jpg",
        teaching_photo="https://interactive-learning-api.s3.amazonaws.com/bob_teaching.jpg",
        listening_photo="https://interactive-learning-api.s3.amazonaws.com/bob_listening.jpg",
    ),
]


@router.get("/", response_model=dict)
def list_characters():
    return {"characters": characters}
