import Router from '@koa/router';

import { login } from '../controllers/user';

const userRouter = new Router({ prefix: '/user' });

userRouter.post('/login', async (ctx) => {
  const userInfo = await login({ username: 'aaa', password: '123456' });
  if (userInfo) {
    ctx.response.body = {
      status: 200,
      token: 'token',
      ...ctx.request.body as object,
      kk: 's'
    };
  } else {
    ctx.response.body = {
      status: 4009,
      message: 'error'
    };
  }
});

export default userRouter;
