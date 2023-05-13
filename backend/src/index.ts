import Koa from 'koa';

const app = new Koa();

app.listen(20000, () => {
  // eslint-disable-next-line no-console
  console.log('feishu-multidimensional-form-backend exec success... (port: 20000)');
});
