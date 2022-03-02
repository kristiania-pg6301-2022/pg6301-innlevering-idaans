import express from "express";
import * as path from "path";

const app = express();

app.get("login", (req, res, next) => {
  res.json({ username: "Noen andre person" });
});

app.post("login", (req, res, next) => {
  res.sendStatus(401);
});

app.use(express.static("../client/dist"));

app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Started on http://localhost:${server.address().port}`);
});
