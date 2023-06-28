import { Nav, Button, Input, Tooltip } from '@douyinfe/semi-ui';

import { LeftArrow, UnStar, Folder, Lock, BitableAuthorization, Robot, Bell, More } from 'assets/svgs';

import HeaderStyles from './styles';

const Header = () => {
  return (
    <HeaderStyles>
      <Nav mode="horizontal" className="header-nav">
        <Nav.Header className="header-nav-header">
          <Button icon={<LeftArrow />} className="left-arrow-button" />
          <div className="form-description">
            <div className="title-favorite">
              <Tooltip content="重命名">
                <Input defaultValue="test" className="title-input" />
              </Tooltip>
              <Button icon={<UnStar />} className="favorite-button" />
            </div>
            <div className="folder-modification">
              <Button icon={<Folder />} className="folder">我的空间</Button>
              <div className="divider" />
              <Tooltip content="查看历史记录">
                <div className="modification">最近修改: 21 小时前</div>
              </Tooltip>
            </div>
          </div>
        </Nav.Header>
        <Nav.Footer className="header-nav-footer">
          <div className="actions">
            <Tooltip content="分享设置：链接分享未开启">
              <Button icon={<Lock />} theme="solid" className="share-button">分享</Button>
            </Tooltip>
            <Tooltip content="多维表格高级权限">
              <Button icon={<BitableAuthorization />} className="outline-button">高级权限</Button>
            </Tooltip>
            <Tooltip content="自动运行设定的流程">
              <Button icon={<Robot />} className="outline-button">自动化</Button>
            </Tooltip>
            <Tooltip content="当前文档通知">
              <Button icon={<Bell />} aria-label="当前文档通知" />
            </Tooltip>
            <Button icon={<More />} aria-label="更多" />
          </div>
        </Nav.Footer>
      </Nav>
    </HeaderStyles>
  );
};

export default Header;
