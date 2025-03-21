import os
import requests
from dotenv import load_dotenv
from fastapi import HTTPException
from fastapi.responses import StreamingResponse

load_dotenv()

ELEVENLABS_API_KEY = os.getenv("ELEVENLABS_API_KEY")
DEFAULT_VOICE_ID = "21m00Tcm4TlvDq8ikWAM"  # Example voice ID


def generate_speech_stream(text: str, voice_id: str = DEFAULT_VOICE_ID):
    """
    Streams audio from ElevenLabs API.

    :param text: The text to convert to speech.
    :param voice_id: The ID of the voice to use.
    :return: A generator that streams audio data.
    """
    url = f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}/stream"
    headers = {"xi-api-key": ELEVENLABS_API_KEY, "Content-Type": "application/json"}
    payload = {
        "text": text,
        "model_id": "eleven_monolingual_v1",
        "voice_settings": {"stability": 0.5, "similarity_boost": 0.5},
    }
    response = requests.post(url, json=payload, headers=headers, stream=True)

    if response.status_code != 200:
        raise HTTPException(status_code=response.status_code, detail=response.text)

    return response.iter_content(chunk_size=1024)
