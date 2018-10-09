import React, { Component } from 'react';
import WrapComponent from "./wrap-component";

class Goodby extends Component {
    render() {
        return (
            <div>
                goodby, {this.props.username}
            </div>
        );
    }
}

export default WrapComponent(Goodby);



/* import React, {Component} from 'react'

class Goodbye extends Component {
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
            <div>goodbye {this.state.username}</div>
        )
    }
}

export default Goodbye; */