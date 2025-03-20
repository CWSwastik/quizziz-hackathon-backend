from fastapi import APIRouter, UploadFile, File
from models.schemas import GenerateSessionRequest, GenerateSessionResponse
from services.script_generator import generate_script
from services.quiz_generator import generate_quiz

router = APIRouter()


@router.post("/generate", response_model=GenerateSessionResponse)
async def generate_learning_session(
    request: GenerateSessionRequest, pdf: UploadFile = None
):
    script = generate_script(
        request.character_1, request.character_2, request.topic_prompt
    )
    quiz = generate_quiz(request.topic_prompt)
    return {"script": script, "quiz": quiz}
