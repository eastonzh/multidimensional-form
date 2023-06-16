import { Nav, Button, Input, Tooltip } from '@douyinfe/semi-ui';

import { LeftArrow, UnStar, Folder } from '../../../assets/svgs';
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
        <Nav.Footer>
          <Button theme="solid" type="primary" style={{ marginRight: 8 }}>深色主要</Button>
          <Button theme="solid" type="primary" style={{ marginRight: 8 }}>深色主要</Button>
          <Button theme="solid" type="primary" style={{ marginRight: 8 }}>深色主要</Button>
        </Nav.Footer>
      </Nav>
    </HeaderStyles>
  );
};

export default Header;
