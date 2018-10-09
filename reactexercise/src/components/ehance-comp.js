import React, { Component } from "react";

var WrapComp = TargetComp => {
  class NewComp extends Component {

    componentDidMount() {
        console.log('组件已经加载' + TargetComp.prototype);        
    }

    render() {
      return <TargetComp fromWhere={'来自父组件'} />;
    }
  }
  return NewComp;
};

export default WrapComp;
