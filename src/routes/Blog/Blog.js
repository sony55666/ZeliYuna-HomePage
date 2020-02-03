import React, { Component } from 'react';
import { Layout, Menu, Row, Col, Form, Carousel, Card } from 'antd';
import style from './Blog.css';
import { connect } from 'dva';
const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;


class Blog extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        )
    }
}

export default connect()(Blog);
