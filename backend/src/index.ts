import Koa from 'koa';

import routersInstaller from './routers';

const app = new Koa();

routersInstaller(app);
app.listen(20000, () => {
  // eslint-disable-next-line no-console
  console.log('feishu-multidimensional-form-backend exec success... (port: 20000)');
});
