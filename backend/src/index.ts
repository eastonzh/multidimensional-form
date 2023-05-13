import Koa from 'koa';
import bodyParser from 'koa-bodyparser';

import routersInstaller from './routers';

const app = new Koa();

app.use(bodyParser());
routersInstaller(app);
app.listen(20000, () => {
  // eslint-disable-next-line no-console
  console.log('feishu-multidimensional-form-backend exec success... (port: 20000)');
});
