import React from "react";
import ReactDOM from "react-dom";
import { ShowQuiz } from "./QuizApplication";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Frontpage() {
  return (
    <>
      <ShowQuiz />
    </>
  );
}

function NewQuiz() {
  return (
    <>
      <h1>This is new quiz page</h1>
      <h3>Heres question</h3>

      <button>Generate new random question</button>
    </>
  );
}

export function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/newquiz" element={<NewQuiz />} />
        <Route path="/*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));
