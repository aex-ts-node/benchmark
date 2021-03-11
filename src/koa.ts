const Koa = require('koa');
const Router = require('koa-router');
import { port } from "./defines";

const koa: any = new Koa();
const router = new Router();

router.get("/url", async (ctx: any) => {
  ctx.body = 'Hello World!';
});

router.get("/user/:id", async (ctx: any) => {
  ctx.body = 'Hello World!';
});

router.get('/', async (ctx: any) => {
  ctx.body = {
    status: 'success',
    message: 'hello, world!'
  };
})

koa.use(router.routes());

export const server = koa.listen(port + 2, () => {
  console.log(`koa listening on port: ${port + 2}`);
});