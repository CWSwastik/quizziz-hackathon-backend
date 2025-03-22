# PersonaEd

This website let's users select a topic and two fictional characters to learn with, and it generates an educational conversation and quiz based on it.

## Features

- Generate educational dialogues between two characters.
- Generate multiple-choice quizzes based on the selected topic.
- Accept topic prompts and optional PDFs for processing.
- Uses LangChain and Groq for AI-driven content generation.

## Tech Stack

- _Frontend:_ React with Tailwind CSS
- _Backend:_ FastAPI, Langchain
- _AI & LLM:_ Groq (llama-3.3) for text and quiz generation
- _AI-generated speech (TTS):_ ElevenLabs

## Setup Instructions

### Prerequisites

- Python 3.8+
- Node.js 14+
- pnpm
- Groq API Key
- ElevenLabs API Key

### Backend Installation

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
   echo "ELEVENLABS_API_KEY=your_elevenlabs_api_key_here" >> .env
   ```

### Running the Server

Start the FastAPI server:

```sh
fastapi run main.py
```

The API will be available at `http://127.0.0.1:8000` and docs at `http://127.0.0.1:8000/docs`.

### Frontend Setup

1. cd into the `frontend` directory:

   ```sh
   cd frontend
   ```

2. Install dependencies:

   ```sh
   pnpm install
   ```

3. Start the development server:

   ```sh
   pnpm run dev
   ```

The frontend will be available at `http://localhost:5173`.

## Note

For the submission the frontend was moved into this repository. The original repository for the frontend can be found [here](https://github.com/Pegasus47/PersonaEd)
