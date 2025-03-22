# PersonaEd: AI-Driven Educational Dialogues and Quizzes

## Overview

PersonaEd is an interactive learning platform that makes education personalized and engaging by using fan-favorite characters like Avengers, Harry Potter, and more to explain concepts. Designed for students aged 5-15, the platform offers text-based explanations along with AI-generated character voices to enhance the learning experience. This is followed by a personalized quiz based on the study material or the topic submitted. This helps engage students and make learning feel personal.

## Features

- _Character-Based Learning:_ Users can choose their favorite fictional characters as learning mentors.
- _Text & Speech Support:_ Lessons are displayed as text and narrated in the character's voice.
- _Personalized Learning:_ Difficulty levels adjust dynamically based on user interaction.
- _Interactive Quiz Generation:_ Users can take quizzes generated dynamically tailored to the selected study material.
- _Custom Content Uploads:_ Users can upload their own study materials for personalized explanations.
- _Gamification Elements:_ Encourages engagement through an immersive and interactive UI.

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

## API Endpoints

| Endpoint        | Method | Description                                 |
| --------------- | ------ | ------------------------------------------- |
| /generate       | POST   | Generates a script and quiz from user input |
| /upload-pdf     | POST   | Parses and extracts text from PDFs          |
| /generate-voice | POST   | Converts text into character voice          |

## Usage and Workflow

1. _Landing page:_ To welcome users and introduce concepts. Includes a character selection button and leads to the chat.
2. _Character selection:_ To allow students to choose their learning mentor. The user sees a grid of character cards.
3. _Chat page:_ An option to upload the PDF or send a prompt through the text box.
4. _Explanation page:_ The chosen character explains the given concept. Also contains an option to go to quiz.
5. _Quiz page:_ Contains the questions derived from the study material.

## Future Enhancements

- Tracking progress of the student and enhancing the future sessions in accordance to the user's learning curve.
- Adding study breaks and options for study techniques like Pomodoro.
- Expansion of gamification elements to boost engagement.

## Contributors

1. Swastik Goswami (2023A7PS0043H)
2. Kriti Saluja (2022B5A70698H)
3. Arpit Kudre (2023A7PS0158H)
4. Neha Bhagwat (2023A7PS0067H)
