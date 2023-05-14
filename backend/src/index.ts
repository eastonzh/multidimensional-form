import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';

import routersInstaller from './routers';

const app = new Koa();

app.use(cors());
app.use(bodyParser());
routersInstaller(app);
app.listen(20000, () => {
  // eslint-disable-next-line no-console
  console.log('feishu-multidimensional-form-backend exec success... (port: 20000)');
});
