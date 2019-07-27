import React from "react";
import { FormattedMessage } from "react-intl";
import {Icon,Layout,Menu,Button,Avatar,Badge } from 'antd';
import { Link } from 'react-router';
const {
  Header, Footer, Sider, Content,
} = Layout;
const SubMenu = Menu.SubMenu;
import "./menu.less";
import menuconfig from './AppMenuConfig';

export default class Menu extends React.Component {
    constructor() {
        super();
        this.state={
            collapsed: true,
        }
    }
    componentDidMount() {
    }
    onSelect=(value)=>{
        this.props.router.replace('/'+value.key );
    }
    toggleCollapsed = () => {
        //console.log(this.state.collapsed)
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }
    render() {
        let selectData = menuconfig.menu_level_one[0].link;
        return (
            <Layout className="main-wrap">
            <Header className="HeaderClass">
                <div className="logo">
                    <img className="Img" src="./resource/images/logo.png" />
                </div>
                {/*<div className="title-name">ReactDemo</div>*/}
                <div className="title-name"><FormattedMessage id="hello"/>-Starter</div>
                <div className="username">
                    <Avatar  icon="user"  style={{marginTop:"13px"}}/>
                    <div className="user">
                        <div className="name">Rs</div>
                        <div className="phone">18712345678</div>
                    </div>
                </div>
            </Header>
            <Layout>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                <Menu theme="dark" mode="inline" onSelect={this.onSelect} defaultSelectedKeys={[selectData]}>
                {
                    menuconfig.menu_level_one.map(function (value, index, array) {
                        let value_name = value.name;
                        if (value.hasOwnProperty('item') && value['show'] == '1') {
                            return  <SubMenu key={value.link?value.link:index}
                                        title={<span>
                                                <Icon type={value.icon} style={{ fontSize: 15 }}></Icon>
                                                <span>
                                                {value.link?
                                                    <Link to={'/' + value.link} style={{ fontSize:'14px',color:'#fff'}}>
                                                        {value.name}
                                                    </Link>:<a style={{ fontSize:'14px',color:'#fff'}}>{value.name}</a>}
                                                </span>
                                                </span>}>
                                            {
                                                value.item.map(function (item, i, a) {
                                                    let item_name = item.name;
                                                    if(item['show'] == '1'){
                                                        return  <Menu.Item key={item.link}>
                                                                    {item.icon==""?"":<Icon type={item.icon} style={{ fontSize: 15 }} />}
                                                                    <span>
                                                                        <Link to={'/' + item.link} style={{ fontSize:'12px',color:'#fff'}}>
                                                                            {item.name}
                                                                        </Link>
                                                                    </span>
                                                                </Menu.Item>
                                                    }
                                                })
                                            }
                                    </SubMenu>
                        } else {
                            if(value['show'] == '1'){
                                return  <Menu.Item key={value.link}>
                                            <Icon type={value.icon} style={{ fontSize: 15}} />
                                                <span>
                                                    <Link to={'/' + value.link} style={{color:'#fff'}} >
                                                        {value.name}
                                                    </Link>
                                                </span>
                                        </Menu.Item>
                            }
                        }
                    })
                }
                </Menu>
                <button className="sideb" type="primary" onClick={this.toggleCollapsed}>
                    <Icon type={this.state.collapsed ? 'right' : 'left'} />
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
