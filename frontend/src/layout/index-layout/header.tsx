import { Nav, Button, Avatar } from '@douyinfe/semi-ui';
import { IconSemiLogo, IconHome, IconLive, IconSetting, IconBell, IconHelpCircle } from '@douyinfe/semi-icons';

const Header = () => (
  <Nav mode="horizontal" defaultSelectedKeys={['Home']} style={{ height: '64px' }}>
    <Nav.Header>
      <IconSemiLogo style={{ fontSize: 36 }} />
    </Nav.Header>
    <Nav.Item itemKey="Home" text="首页" icon={<IconHome size="large" />} />
    <Nav.Item itemKey="Live" text="直播" icon={<IconLive size="large" />} />
    <Nav.Item itemKey="Setting" text="设置" icon={<IconSetting size="large" />} />
    <Nav.Footer>
      <Button
        theme="borderless"
        icon={<IconBell size="large" />}
        style={{
          color: 'var(--semi-color-text-2)',
          marginRight: '12px'
        }}
      />
      <Button
        theme="borderless"
        icon={<IconHelpCircle size="large" />}
        style={{
          color: 'var(--semi-color-text-2)',
          marginRight: '12px'
        }}
      />
      <Avatar color="orange" size="small">
        YJ
      </Avatar>
    </Nav.Footer>
  </Nav>
);
export default Header;
