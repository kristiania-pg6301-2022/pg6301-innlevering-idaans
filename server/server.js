import express from "express";
import * as path from "path";
import { randomQuestion, Questions, isCorrectAnswer } from "./question.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.get("/api/newquiz/random", (req, res, next) => {
  const { id, category, question, answers } = randomQuestion();
  res.json({ id, category, question, answers });
});

app.post("/api/newquiz/answer", (req, res, answer) => {
  const { id } = req.body;
  const question = Questions.find((q) => q.id === id);
  if (!question) {
    return res.sendStatus(404);
  }
  if (isCorrectAnswer(question, answer)) {
    return res.json({ result: "correct" });
  } else {
    return res.json({ result: "incorrect" });
  }
});

app.use(express.static("../client/dist/"));

app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api/")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 3001, () => {
  console.log(`Started on http://localhost:${server.address().port}`);
});
