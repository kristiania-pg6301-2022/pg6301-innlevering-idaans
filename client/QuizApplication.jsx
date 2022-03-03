import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { isCorrectAnswer, randomQuestion } from "../server/question";
import { useLoader } from "./useLoader";
import { fetchJSON, postJSON } from "./http";

/*export function ShowQuiz() {
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
}*/

function ShowQuestion({ question, onReload }) {
  async function handleAnswer(answer) {
    const { id } = question;
    postJSON("/api/newquiz/answer", { id, answer });
    onReload();
  }
  return (
    <>
      <h1>{question.question}</h1>
      {Object.keys(question.answers)
        .filter((a) => question.answers[a])
        .map((a) => (
          <p key={a}>
            <button onClick={() => handleAnswer(a)}>
              {question.answers[a]}
            </button>
          </p>
        ))}
    </>
  );
}

function QuestionComponent({ reload }) {
  const [question, setQuestion] = useState();

  async function handleLoadQuestion() {
    const res = await fetch("/api/newquiz/random");
    setQuestion(await res.json());
  }

  function handleReload() {
    setQuestion(undefined);
    reload();
  }

  if (!question) {
    return (
      <div>
        <button onClick={handleLoadQuestion}>Get a new question</button>
      </div>
    );
  }
  return <ShowQuestion question={question} onReload={handleReload()} />;
}

export function QuizApp() {
  const { loading, reload } = useLoader(async () =>
    fetchJSON("/api/newquiz/random")
  );
  return (
    <>
      <h1>Velkommen</h1>
      {loading && <div>Loading...</div>}
      <QuestionComponent reload={reload} />
    </>
  );
}

/*function ShowAnswerStatus({ answer, onRestart, question }) {
  return (
    <>
      <h1>{isCorrectAnswer(question, answer) ? "Right" : "Wrong"}</h1>
      <p>
        <button onClick={onRestart}>New question</button>
      </p>
    </>
  );
}*/

/*export function Quiz() {
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
}*/

/*export function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/newquiz" element={<Quiz />} />
        <Route path="/*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}*/
