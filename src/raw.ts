const http = require('http');
import { port } from "./defines";

import { match } from "path-to-regexp";

const server = http.createServer((req: any, res: any) => {
  switch (req.url) {
    case "/url":
      res.end("Hello world!\n");
      break;
    default:
      const fn = match("/user/:id", { decode: decodeURIComponent });
      const result = fn(req.url);
      if (result !== false) {
        res.end("Hello world!\n");
        return;
      }
      res.end("Hello world!\n");
  }
});

server.listen(port, () => {
  console.log(`raw http listening on port: ${port}`);
});
