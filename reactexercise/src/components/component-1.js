import React, { Component } from 'react';
import EnhanceComp from "./ehance-comp";

class ComponentOne extends Component {
    render() {
        console.log(this.props.fromWhere);
        
        return (
            <div>
                我是组件一
            </div>
        );
    }
}

export default EnhanceComp(ComponentOne);