import React, { Component } from 'react';
import { Layout, Menu, Row, Col, Form, Carousel, Card } from 'antd';
import style from './Blog.css';
import { connect } from 'dva';
import _ from 'lodash';
const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;


class Blog extends Component {
    render() {
        const { BlogInfo } = this.props;
        const Blog_Data = BlogInfo[this.props.match.params.id];
        const Dipicamond = require('../../picture/blog' + this.props.match.params.id + '.jpeg');

        console.log(Blog_Data);

        return (
            <div style={{ background: '#fff', padding: 24, minHeight: 700 }}>
                <div style={{ overflow: 'hidden', Width: '70%', maxHeight: 450 }}>
                    <img src={Dipicamond} alt={this.props.match.params.id} style={{ display: 'block', backGround: 'rgb(255, 0, 0)', margin: '-30% 0' }}></img>
                </div>
                <h1>{Blog_Data.title}</h1>
                <div style={{ display: 'inline-block', fontSize: '16px', marginBottom: '5px' }}>{Blog_Data.date}</div>
                {/* dangerouslySetInnerHTML 將字串轉為html */}
                <div dangerouslySetInnerHTML={{ __html: Blog_Data.content }}>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        BlogInfo: _.get(state, 'blogData.BlogInfo', null),
    }
}

export default connect(mapStateToProps)(Blog);
