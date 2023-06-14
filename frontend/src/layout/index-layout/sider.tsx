import { Nav } from '@douyinfe/semi-ui';
import { IconHome, IconHistogram, IconLive, IconSetting } from '@douyinfe/semi-icons';

const Sider = () => (
  <Nav
    className="max-w-[236px] h-[calc(100vh-64px)]"
    defaultSelectedKeys={['Home']}
    items={[
      { itemKey: 'Home', text: '首页', icon: <IconHome size="large" /> },
      { itemKey: 'Histogram', text: '基础数据', icon: <IconHistogram size="large" /> },
      { itemKey: 'Live', text: '测试功能', icon: <IconLive size="large" /> },
      { itemKey: 'Setting', text: '设置', icon: <IconSetting size="large" /> }
    ]}
    footer={{
      collapseButton: true
    }}
  />
);

export default Sider;
