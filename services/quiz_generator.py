from langchain_groq import ChatGroq
from langchain.prompts import PromptTemplate
from dotenv import load_dotenv

load_dotenv()
llm = ChatGroq(model="llama-3.3-70b-versatile")


def generate_quiz(topic: str):
    prompt = f"""
    Create a multiple-choice quiz with 3 questions about {topic}.
    Each question should have 3 options and 1 correct answer.
    Format it as python dictionary like this dont use any md just python dict: 
    {{
      "quiz": [
        {{"question": "...", "options": ["...", "...", "..."], "correct_answer": "..."}}
      ]
    }}
    """
    response = llm.invoke(prompt)

    return eval(response.content)


if __name__ == "__main__":
    print(generate_quiz("Newton's Laws of Motion"))
