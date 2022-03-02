import React from "react";
import { Link, useNavigate } from "react-router-dom";

function handleNavigation(e) {
  let navigate = useNavigate();
  let path = "newquiz";
  navigate(path);
}

export function ShowQuiz() {
  return (
    <>
      <h1>Welcome to the quiz page</h1>
      <Link to="/newquiz">
        <button>Take new quiz</button>
      </Link>
    </>
  );
}
