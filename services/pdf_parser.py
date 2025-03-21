import os
from pypdf import PdfReader
from langchain_groq import ChatGroq
from dotenv import load_dotenv

load_dotenv()

# Initialize LLM for summarization
llm = ChatGroq(model="llama-3.3-70b-versatile")

def extract_text_from_pdf(pdf_file) -> str:
    """Extracts text from an uploaded PDF file."""
    reader = PdfReader(pdf_file)
    text = "\n".join([page.extract_text() for page in reader.pages if page.extract_text()])
    return text.strip()

def summarize_text(text: str) -> str:
    """Summarizes extracted text using an LLM."""
    if len(text) < 100:
        return text  # If text is short, return as is

    prompt = f"Summarize the following text concisely:\n\n{text}"
    response = llm.invoke(prompt)
    return response.content.strip()
