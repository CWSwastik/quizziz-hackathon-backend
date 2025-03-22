from fastapi import APIRouter
from models.schemas import Character

router = APIRouter()

characters = [
    Character(
        name="Hermione",
        voice_id="21m00Tcm4TlvDq8ikWAM",
        thinking_photo="https://interactive-learning-api.s3.amazonaws.com/alice_thinking.jpg",
        teaching_photo="https://interactive-learning-api.s3.amazonaws.com/alice_teaching.jpg",
        listening_photo="https://interactive-learning-api.s3.amazonaws.com/alice_listening.jpg",
        scolding_photo="https://interactive-learning-api.s3.amazonaws.com/alice_scolding.jpg",
    ),
    Character(
        name="Harry Potter",
        voice_id="CwhRBWXzGAHq8TQ4Fs17",
        thinking_photo="https://interactive-learning-api.s3.amazonaws.com/bob_thinking.jpg",
        teaching_photo="https://interactive-learning-api.s3.amazonaws.com/bob_teaching.jpg",
        listening_photo="https://interactive-learning-api.s3.amazonaws.com/bob_listening.jpg",
        scolding_photo="https://interactive-learning-api.s3.amazonaws.com/bob_scolding.jpg",
    ),
]


def get_character(name: str):
    for character in characters:
        if character.name == name:
            return character
    return None


@router.get("/", response_model=list[Character])
async def list_characters():
    return characters
