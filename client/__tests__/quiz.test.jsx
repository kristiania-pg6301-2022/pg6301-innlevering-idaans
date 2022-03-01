import React from "react";
import ReactDOM from "react-dom";
import { ShowQuiz } from "../QuizApplication";

describe("quiz application", () => {
  it("shows quiz", () => {
    const element = document.createElement("div");
    ReactDOM.render(<ShowQuiz />, element);
    expect(element.querySelector("h1").innerHTML).toEqual("Question");
    expect(element.innerHTML).toMatchSnapshot();
  });
});
