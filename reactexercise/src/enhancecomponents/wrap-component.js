import React, {Component} from 'react';

//高阶组件：接受一个组件，返回一个新的组件，将公共的逻辑封装的新的组件里
var WrapComponent = (TargetComponent) => {
    class newComponent extends Component {
        constructor(){
            super();
            this.state = {
                username: ''
            }
        }
        
        componentWillMount() {
            let username = "ycl";
            this.setState({
                username: username
            })
        }

        render () {
            return <TargetComponent username={this.state.username} />
        }
    }

    return newComponent;
}

export default WrapComponent;