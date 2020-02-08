import React, { Component } from 'react';
import { routerRedux } from 'dva/router';
import { Button, Layout, Menu, Icon, notification } from 'antd';
import { connect } from 'dva';
import _ from 'lodash';
const { Header, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;


class BlogLayout extends Component {

    openNotification = (value) => {
        if (value == "first") {
            notification.open({
                message: '已到達第一篇',
                description:
                    '此篇為部落格的第一篇',
                icon: <Icon type="close-circle" style={{ color: '#e92210' }} />,
            });
        }
        else if (value == "last") {
            const key = `open${Date.now()}`;
            const btn = (
                <Button type="primary" size="small" onClick={() => { notification.close(key);  this.props.dispatch(routerRedux.push(`/`)); }}>
                    回到首頁
                </Button>
            );
            notification.open({
                message: '已到達最後一篇',
                description:
                    '此篇為部落格的最後一篇，點擊以下按鈕回到首頁',
                icon: <Icon type="close-circle" style={{ color: '#e92210' }} />,
                btn,
                key
            });
        }
    };

    frontBlog = () => {
        const blog_num = window.location.hash.split('/')[2];
        if (blog_num == 0) {
            this.openNotification("first");
        }
        else {
            this.props.dispatch(routerRedux.push(`/blog/${parseInt(blog_num) - 1}`));
        }
    }

    nextBlog = () => {
        const blog_num = window.location.hash.split('/')[2];
        if (blog_num == this.props.BlogInfo.length - 1) {
            this.openNotification("last");
        }
        else {
            this.props.dispatch(routerRedux.push(`/blog/${parseInt(blog_num) + 1}`));
        }
    }

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
                            </a>
                        </Menu.Item>
                        <Menu.Item key="2" onClick={this.frontBlog}>
                            <Icon type="caret-left" style={{ fontSize: '24px', verticalAlign: 'middle' }} />
                        </Menu.Item>
                        <Menu.Item key="3" onClick={this.nextBlog}>
                            <Icon type="caret-right" style={{ fontSize: '24px', verticalAlign: 'middle' }} />
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '50px' }}>
                    {
                        this.props.children
                    }
                </Content>
                <Footer> ©2020 Created by Sam Lin using React Dva</Footer>
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