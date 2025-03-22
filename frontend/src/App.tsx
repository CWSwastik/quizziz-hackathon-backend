import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import CharacterSelection from "./components/CharacterSelection";
import CommandSection from "./components/CommandSection";
import ExplanationPage from "./CharacterDialogues";
import QuizPage from "./QuizPage";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/characters" element={<CharacterSelection />} />
        <Route path="/chat" element={<CommandSection />} />
        <Route path="/explain" element={<ExplanationPage />} />
        <Route path ="/quiz" element={<QuizPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
