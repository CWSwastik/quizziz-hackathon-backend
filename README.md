# PersonaEd Backend

This backend generates interactive learning scripts and quizzes using LangChain and Groq. Users select a topic and two fictional characters to learn with, and the API generates an educational conversation and quiz.

## Features

- Generate educational dialogues between two characters.
- Generate multiple-choice quizzes based on the selected topic.
- Accept topic prompts and optional PDFs for processing.
- Uses LangChain and Groq for AI-driven content generation.

## Setup Instructions

### Prerequisites

- Python 3.8+
- Groq API Key

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/CWSwastik/quizziz-hackathon-backend.git
   cd quizziz-hackathon-backend
   ```

2. Create a virtual environment:

   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:

   ```sh
   pip install -r requirements.txt
   ```

4. Create a `.env` file and add your Groq API key:
   ```sh
   echo "GROQ_API_KEY=your_groq_api_key_here" > .env
   ```

### Running the Server

Start the FastAPI server:

```sh
fastapi run main.py
```

The API will be available at `http://127.0.0.1:8000` and docs at `http://127.0.0.1:8000/docs`.
