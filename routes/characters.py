from fastapi import APIRouter
from models.schemas import Character

router = APIRouter()

characters = [
    Character(
        name="Elsa",
        voice_id="21m00Tcm4TlvDq8ikWAM",
        photo_url="https://i.imgur.com/OxiBS0D.png",
    ),
    Character(
        name="Batman",
        voice_id="CwhRBWXzGAHq8TQ4Fs17",
        photo_url="https://i.imgur.com/V6Dt7Co.png",
    ),
    Character(
        name="Captain America",
        voice_id="CwhRBWXzGAHq8TQ4Fs17",
        photo_url="https://i.imgur.com/gBsmEgN.png",
    ),
    Character(
        name="Captain Kirk",
        voice_id="CwhRBWXzGAHq8TQ4Fs17",
        photo_url="https://i.imgur.com/R61r5Wu.png",
    ),
    Character(
        name="Darth Vader",
        voice_id="CwhRBWXzGAHq8TQ4Fs17",
        photo_url="https://i.imgur.com/DRlJcb5.png",
    ),
    Character(
        name="Dr. Watson",
        voice_id="CwhRBWXzGAHq8TQ4Fs17",
        photo_url="https://i.imgur.com/mObOgTk.png",
    ),
    Character(
        name="Hermione",
        voice_id="21m00Tcm4TlvDq8ikWAM",
        photo_url="https://i.imgur.com/gU6Z4bN.png",
    ),
    Character(
        name="Harry Potter",
        voice_id="CwhRBWXzGAHq8TQ4Fs17",
        photo_url="https://i.imgur.com/QoKbe1q.png",
    ),
    Character(
        name="Iron Man",
        voice_id="CwhRBWXzGAHq8TQ4Fs17",
        photo_url="https://i.imgur.com/TFOX9NS.png",
    ),
    Character(
        name="Peter Griffin",
        voice_id="CwhRBWXzGAHq8TQ4Fs17",
        photo_url="https://i.imgur.com/AN4x0iM.png",
    ),
    Character(
        name="Sherlock Holmes",
        voice_id="CwhRBWXzGAHq8TQ4Fs17",
        photo_url="https://i.imgur.com/kKGyq3E.png",
    ),
    Character(
        name="Spock",
        voice_id="CwhRBWXzGAHq8TQ4Fs17",
        photo_url="https://i.imgur.com/95M2PZ0.png",
    ),
    Character(
        name="Stooey",
        voice_id="CwhRBWXzGAHq8TQ4Fs17",
        photo_url="https://i.imgur.com/R6oY6Fn.png",
    ),
    Character(
        name="Yoda",
        voice_id="CwhRBWXzGAHq8TQ4Fs17",
        photo_url="https://i.imgur.com/4iRvYV4.png",
    ),
    Character(
        name="Superman",
        voice_id="CwhRBWXzGAHq8TQ4Fs17",
        photo_url="https://i.imgur.com/438yfhk.png",
    ),
    Character(
        name="Naruto",
        voice_id="CwhRBWXzGAHq8TQ4Fs17",
        photo_url="https://pngimg.com/d/naruto_PNG20.png",
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
