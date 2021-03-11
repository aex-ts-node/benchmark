const express = require("express");
import { port } from "./defines";

const app = express();

app.get("/url", (_req: any, res: any) => {
  res.end("Hello world!");
});


app.get("/user/:id", (_req: any, res: any) => {
  res.end("Hello world!");
});

app.use((_req: any, res: any) => {
  res.end("Hello world!");
});

app.listen(port + 1, () => {
  console.log(`express listening on port: ${port + 1}`);
});