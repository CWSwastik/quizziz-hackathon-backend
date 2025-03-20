from pydantic import BaseModel
from typing import List, Optional


class GenerateSessionRequest(BaseModel):
    topic_prompt: str
    character_1: str
    character_2: str
    pdf: Optional[bytes] = None  # PDF is optional


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
