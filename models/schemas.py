from pydantic import BaseModel
from typing import List, Optional


class GenerateSessionRequest(BaseModel):
    topic_prompt: str
    character_1: str
    character_2: str


class Dialogue(BaseModel):
    speaker: str
    dialogue: str


class QuizQuestion(BaseModel):
    question: str
    options: List[str]
    correct_answer: str


class GenerateSessionResponse(BaseModel):
    script: List[Dialogue]
    quiz: List[QuizQuestion]


class SummarizePDFResponse(BaseModel):
    summary: str


class Character(BaseModel):
    name: str
    voice_id: str
    thinking_photo: str
    teaching_photo: str
    listening_photo: str
