import React, { Component } from 'react';
import { routerRedux } from 'dva/router';
import { Button, Layout, Menu, Icon, Col, Row, Modal, Avatar, message, Breadcrumb } from 'antd';
import { connect } from 'dva';
import _ from 'lodash';
const { Header, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;


class BlogLayout extends Component {

    componentDidMount() {
        console.log(this.props.location);

      }

    render() {
        const { BlogInfo } = this.props;
        console.log(this.props);
        console.log(this.props.match);
        return (
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
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