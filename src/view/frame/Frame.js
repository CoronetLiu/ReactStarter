import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { Icon, Layout, Menu, Avatar} from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
const {
  Header, Sider, Content
} = Layout;

import './frame.less';

export default class Frame extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: false
    };
  }

  componentDidMount() {
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
      <Layout className="main-wrap">
        <Header className="HeaderClass">
          <div className="logo">
            <img className="Img" src="./resource/images/logo.png"/>
          </div>
          <div className="title-name"><FormattedMessage id="hello"/>-Starter</div>
        </Header>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <Menu
              onClick={this.handleClick}
              defaultSelectedKeys={['0']}
              defaultOpenKeys={['0']}
              mode="inline"
              theme="dark"
            >
              <Menu.Item key="0">
                <Link to={'/home'}>
                  <Icon type="home" />
                  <span>Home</span>
                </Link>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
              <Icon type="setting" />
              <span>Setting</span>
            </span>
                }
              >
                <Menu.Item key="1"><Link to={'/map'}>Map</Link></Menu.Item>
                <SubMenu key="sub2" title="Submenu">
                  <Menu.Item key="21">Option 1</Menu.Item>
                  <Menu.Item key="22">Option 2</Menu.Item>
                </SubMenu>
              </SubMenu>
            </Menu>
            <button className="sideb" type="primary" onClick={this.toggleCollapsed}>
              <Icon type={this.state.collapsed ? 'right' : 'left'}/>
            </button>
          </Sider>
          <Content>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>

    );
  }
}
