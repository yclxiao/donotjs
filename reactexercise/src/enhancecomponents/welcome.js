import React, { Component } from 'react';
import WrapComponent from "./wrap-component";

class Welcome extends Component {
    render() {
        return (
            <div>
                welcome, {this.props.username}
            </div>
        );
    }
}

export default WrapComponent(Welcome);

//以下是使用非高阶组件的方式编写，使用高阶组件可以将公共逻辑抽取出去

/* import React, {Component} from 'react'

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }

    componentWillMount() {
        let username = localStorage.getItem('username');
        this.setState({
            username: username
        })
    }

    render() {
        return (
            <div>welcome {this.state.username}</div>
        )
    }
}

export default Welcome; */