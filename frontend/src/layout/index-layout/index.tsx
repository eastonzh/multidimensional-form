import type { PropsWithChildren } from 'react';

import { Layout } from '@douyinfe/semi-ui';
import Header from './header';
import Sider from './sider';

const IndexLayout = ({ children }: PropsWithChildren) => (
  <Layout>
    <Layout.Header>
      <Header />
    </Layout.Header>
    <Layout>
      <Layout.Sider>
        <Sider />
      </Layout.Sider>
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  </Layout>
);

export default IndexLayout;
