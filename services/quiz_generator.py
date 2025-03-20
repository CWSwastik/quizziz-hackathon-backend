def generate_quiz(topic: str):
    return [
        {
            "question": f"What is a key concept in {topic}?",
            "options": ["Option A", "Option B", "Option C"],
            "correct_answer": "Option A",
        }
    ]
