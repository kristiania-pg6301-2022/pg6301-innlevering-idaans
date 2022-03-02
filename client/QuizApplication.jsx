import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { isCorrectAnswer, randomQuestion } from "../public/question";

export function ShowQuiz() {
  return (
    <>
      <h1>Welcome to the quiz page</h1>
      <h3>Only one answer is correct</h3>
      <Link to="/newquiz">
        <button>Take new quiz</button>
      </Link>
    </>
  );
}

export function Frontpage() {
  return (
    <>
      <ShowQuiz />
    </>
  );
}

function ShowQuestion({ question, onAnswer }) {
  return (
    <>
      <h1>{question.question}</h1>
      {Object.keys(question.answers)
        .filter((a) => question.answers[a])
        .map((a) => (
          <p key={a}>
            <button onClick={() => onAnswer(a)}>{question.answers[a]}</button>
          </p>
        ))}
    </>
  );
}

function ShowAnswerStatus({ answer, onRestart, question }) {
  return (
    <>
      <h1>{isCorrectAnswer(question, answer) ? "Right" : "Wrong"}</h1>
      <p>
        <button onClick={onRestart}>New question</button>
      </p>
    </>
  );
}

function randomQuestion() {}

export function Quiz() {
  const [question, setQuestion] = useState(randomQuestion());
  const [answer, setAnswer] = useState();

  function handleRestart() {
    setQuestion(randomQuestion());
    setAnswer(undefined);
  }

  if (answer) {
    return (
      <ShowAnswerStatus
        question={question}
        answer={answer}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <>
      <ShowQuestion question={question} onAnswer={setAnswer} />
      <Link to="/">
        <button>Back to FrontPage</button>
      </Link>
    </>
  );
}

export function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/newquiz" element={<Quiz />} />
        <Route path="/*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
