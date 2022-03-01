import React from "react";
import ReactDOM from "react-dom";
import { ShowQuiz } from "../client/index";

describe("quiz application", () => {
  it("shows quiz", () => {
    const element = document.createElement("div");
    ReactDOM.render(<ShowQuiz />, element);
    expect(element.querySelector("h1").innerText).toEqual("Question");
    expect(element.innerHTML).toMatchSnapshot();
  });
});
