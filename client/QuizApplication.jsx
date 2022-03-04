import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { isCorrectAnswer, Questions, randomQuestion } from "../server/question";
import { useLoader } from "./useLoader";
import { fetchJSON, postJSON } from "./http";

export function Frontpage() {
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

function ShowQuestion({ question, onReload }) {
  const [result, setResult] = useState();
  async function handleAnswer(answers) {
    const { id } = question;
    const { result } = await postJSON("/api/newquiz", { id, answers });
    setResult(result);
  }
  if (result) {
    return (
      <div>
        <p>your answer was {result}</p>
        <button onClick={onReload}>Another question</button>
      </div>
    );
  }
  return (
    <>
      <h1>{question.question}</h1>
      {Object.keys(question.answers)
        .filter((a) => question.answers[a])
        .map((a) => (
          <p key={a}>
            <Link to="/newquiz">
              <button onClick={() => handleAnswer(a)}>
                {question.answers[a]}
              </button>
            </Link>
          </p>
        ))}
    </>
  );
}

function QuestionComponent({ reload }) {
  const [question, setQuestion] = useState();

  async function handleLoadQuestion() {
    const res = await fetchJSON("/api/newquiz");
    setQuestion(await res);
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
  return <ShowQuestion question={question} onReload={handleReload} />;
}

export function QuizApp() {
  const { loading, reload } = useLoader(async () => fetchJSON("/api/newquiz"));
  return (
    <>
      <h1>Quiz</h1>
      {loading && <div>Loading...</div>}
      <QuestionComponent reload={reload} />
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

export function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/newquiz" element={<QuizApp />} />
        <Route path="/*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
