const Koa = require('koa');
const koa: any = new Koa();

koa.use(async (ctx: any) => {
  ctx.body = 'Hello World';
});

koa.listen(8086);