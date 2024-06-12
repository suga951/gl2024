import express from "express";
import requestTime from "./Middlewares/requestTime.js";
import requestsMade from "./Middlewares/requestsMade.js";
const app = express();
const PORT = 3000;

app.use(requestTime);
app.use(requestsMade);

app.get("/", (_req, res) => {
  res.send("Hello World!");
  requestTime;
  requestsMade;
});

app.use((_req, res, _next) => {
  res.status(404).send("Not Found");
  requestTime;
  requestsMade;
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
