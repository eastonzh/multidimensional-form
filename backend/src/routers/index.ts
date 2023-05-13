/**
 * Register all routers.
 */

import type Koa from 'koa';

import userRouter from './user';

export default function (app: Koa<Koa.DefaultState, Koa.DefaultContext>) {
  app.use(userRouter.routes());
  app.use(userRouter.allowedMethods());
}
