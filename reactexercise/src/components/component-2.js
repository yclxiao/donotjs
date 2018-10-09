import React, { Component } from 'react';
import EnhanceComp from "./ehance-comp";

class ComponentTwo extends Component {
    render () {
        console.log(this.props.fromWhere);
        return (
            <div>
                我是组件二
            </div>
        )
    }
}

export default EnhanceComp(ComponentTwo);