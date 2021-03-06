const express = require("express");

const app = express();

app.use((_req:any, res:any) => {
  res.end("Hello world!");
});

app.listen(8085);