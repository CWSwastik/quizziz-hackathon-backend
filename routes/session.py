from fastapi import APIRouter, UploadFile, File
from models.schemas import (
    GenerateSessionRequest,
    GenerateSessionResponse,
    Dialogue,
    QuizQuestion,
)
from services.script_generator import generate_script
from services.quiz_generator import generate_quiz

router = APIRouter()


@router.post("/generate", response_model=GenerateSessionResponse)
async def generate_learning_session(request: GenerateSessionRequest):
    script = generate_script(
        request.character_1, request.character_2, request.topic_prompt
    )

    final_script = []
    for speaker, pose, msg in script:
        final_script.append(Dialogue(speaker=speaker, pose=pose, dialogue=msg))

    quiz = generate_quiz(request.topic_prompt)
    final_quiz = []
    for question in quiz["quiz"]:
        final_quiz.append(
            QuizQuestion(
                question=question["question"],
                options=question["options"],
                correct_answer=question["correct_answer"],
            )
        )

    return {"script": final_script, "quiz": final_quiz}
