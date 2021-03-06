import { Aex, http } from "@aex/core";

const aex = new Aex();

class HellWorld {
  @http("*", "*")
  public async get(_req:any, res:any) {
    res.end("Hello World!");
  }
}

aex.push(HellWorld);
aex.prepare().start(8084).then(() => {
  console.log("servering");
});