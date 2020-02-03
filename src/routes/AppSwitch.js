import React, { Component } from 'react';
import IndexLayout from '../Layout/IndexLayout';
import BlogLayout from '../Layout/BlogLayout';
import { Switch } from 'dva/router';

class AppSwitch extends Component {

  render() {
    const { children, location } = this.props;
    const { pathname } = location;
    if(pathname.indexOf('/blog') > -1){
      return (<BlogLayout><Switch>{children}</Switch></BlogLayout>)
    }
     else if(pathname.indexOf('./' > -1)) {
      return (<IndexLayout><Switch>{children}</Switch></IndexLayout>)
    }
  }

}

export default AppSwitch;
