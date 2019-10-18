import React from 'react';
import { Icon, Layout, Menu, Avatar } from 'antd';

const {
  Header, Sider, Content,
} = Layout;

import './frame.less';

export default class Frame extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <Layout className="main-wrap">
        {this.props.children}
      </Layout>
    );
  }
}
