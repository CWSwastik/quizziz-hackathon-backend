import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationHeader from "@/components/NavigationHeader";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const QuizPage: React.FC = () => {
  const quizData = JSON.parse(localStorage.getItem("quiz") || "null") || [
    {
      question: "Who is Pythagoras?",
      options: [
        "A Greek philosopher",
        "A Roman emperor",
        "An Egyptian pharaoh",
      ],
      correct_answer: "A Greek philosopher",
    },
    {
      question: "What is the name of the theorem associated with Pythagoras?",
      options: [
        "Theorem of Euclid",
        "Theorem of Archimedes",
        "Pythagorean Theorem",
      ],
      correct_answer: "Pythagorean Theorem",
    },
    {
      question: "In which century did Pythagoras live?",
      options: ["5th century BC", "10th century AD", "15th century AD"],
      correct_answer: "5th century BC",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<
    { question: string; selected: string; correct: string }[]
  >([]);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    const isCorrect =
      selectedAnswer === quizData[currentQuestion].correct_answer;
    if (isCorrect) setScore((prev) => prev + 1);

    setAnswers((prev) => [
      ...prev,
      {
        question: quizData[currentQuestion].question,
        selected: selectedAnswer,
        correct: quizData[currentQuestion].correct_answer,
      },
    ]);

    setSelectedAnswer(null);

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const data = [
    { name: "Correct", value: score },
    { name: "Incorrect", value: quizData.length - score },
  ];
  const COLORS = ["#00C49F", "#FF4444"];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary/10 to-secondary/10">
      <NavigationHeader />
      <div className="container mx-auto px-6 py-12 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="backdrop-blur-sm bg-background/80 border shadow-lg p-6">
            {!showResults ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <h1 className="text-3xl font-bold mb-8">
                    {quizData[currentQuestion]?.question}
                  </h1>
                  <div className="grid gap-4 mb-8">
                    {quizData[currentQuestion]?.options.map((option: any) => (
                      <Card
                        key={option}
                        className={`p-4 cursor-pointer transition-all ${
                          selectedAnswer === option
                            ? "border-blue-500 bg-primary/10"
                            : "hover:border-primary/50"
                        }`}
                        onClick={() => handleAnswerSelect(option)}
                      >
                        <p className="text-lg">{option}</p>
                      </Card>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <Button
                      onClick={handleNext}
                      disabled={!selectedAnswer}
                      className="rounded-full px-8 py-4 text-lg"
                    >
                      {currentQuestion === quizData.length - 1
                        ? "Finish"
                        : "Next"}
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <h1 className="text-4xl font-bold mb-4">Quiz Complete! 🎉</h1>
                <p className="text-2xl mb-8">
                  You scored {score} out of {quizData.length}
                </p>
                <div className="flex justify-center">
                  <PieChart width={300} height={300}>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {data.map((_, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </div>
                <div className="mt-8 text-left">
                  <h2 className="text-2xl font-semibold mb-4">
                    Results Summary:
                  </h2>
                  {answers.map((item, index) => (
                    <div
                      key={index}
                      className={`p-3 my-2 rounded ${
                        item.selected === item.correct
                          ? "bg-green-100"
                          : "bg-red-100"
                      }`}
                    >
                      <p className="font-medium">Q: {item.question}</p>
                      <p
                        className={`font-semibold ${
                          item.selected === item.correct
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        Your Answer: {item.selected}
                      </p>
                      {item.selected !== item.correct && (
                        <p className="text-gray-600">
                          Correct Answer: {item.correct}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-8">
                  <Button
                    onClick={() => {
                      setCurrentQuestion(0);
                      setScore(0);
                      setShowResults(false);
                      setAnswers([]);
                      setSelectedAnswer(null);
                    }}
                    className="rounded-full px-8 py-4 text-lg"
                  >
                    Try Again
                  </Button>
                </div>
              </motion.div>
            )}
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default QuizPage;
