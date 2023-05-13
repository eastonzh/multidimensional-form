import Router from '@koa/router';

const userRouter = new Router({ prefix: '/user' });

userRouter.post('/login', (ctx) => {
  ctx.response.body = {
    status: 200,
    token: 'token',
    ...ctx.request.body as object
  };
});

export default userRouter;
