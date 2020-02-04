import React, { Component } from 'react';
import { routerRedux } from 'dva/router';
import { Button, Layout, Menu, Icon, Col, Row, Modal, Avatar, message, Breadcrumb } from 'antd';
import { connect } from 'dva';
import _ from 'lodash';
const { Header, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;


class BlogLayout extends Component {

    render() {
        const { BlogInfo } = this.props;
        return (
            <Layout>
                <Header>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">
                            <a rel="noopener" style={{ color: 'rgb(255, 255, 255)', textDecoration: 'none' }} href={`/#/`}>
                                <Icon type="rollback" style={{ fontSize: '24px', verticalAlign: 'middle' }} />
                                首頁
                            </a>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '50px' }}>
                    {
                        this.props.children
                    }
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        BlogInfo: _.get(state, 'blogData.BlogInfo', null),
    }
}

export default connect(mapStateToProps)(BlogLayout);