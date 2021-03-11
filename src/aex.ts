import { Aex, http, get } from "@aex/core";
import { port } from "./defines";
const aex = new Aex();

class HellWorld {
  @http("*", "*")
  public async get(_req: any, res: any) {
    res.end("Hello World!");
  }

  @get("/url")
  public async url(_req: any, res: any) {
    res.end("Hello World!");
  }

  @get("/user/:id")
  public async user(_req: any, res: any) {
    res.end("Hello World!");
  }
}

aex.push(HellWorld);
aex.prepare().start(port + 3).then(() => {
  console.log(`aex servering at ${port + 3} `);
});