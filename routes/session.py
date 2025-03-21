from fastapi import APIRouter, UploadFile, File, Query
from models.schemas import (
    GenerateSessionRequest,
    GenerateSessionResponse,
    Dialogue,
    QuizQuestion,
    GenerateVoiceRequest,
)
from models.schemas import SummarizePDFResponse

from services.script_generator import generate_script
from services.quiz_generator import generate_quiz
from services.pdf_parser import extract_text_from_pdf, summarize_text
from services.voice_generator import generate_speech_stream
from fastapi.responses import StreamingResponse

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


@router.post("/upload-pdf/", response_model=SummarizePDFResponse)
async def upload_pdf(file: UploadFile = File(...)):
    """Endpoint to upload a PDF and return its summarized content."""
    text = extract_text_from_pdf(file.file)
    summary = summarize_text(text)
    return {"summary": summary}


@router.get("/generate-voice/")
async def generate_voice_endpoint(
    text: str = Query(..., description="Text to convert to speech")
):
    """
    Streams AI-generated speech using ElevenLabs API.
    """
    audio_stream = generate_speech_stream(text)
    return StreamingResponse(audio_stream, media_type="audio/mpeg")
