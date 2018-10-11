import React, { Component } from "react";

class Link extends Component {
  render() {
    let children = this.props.children;
    let active = this.props.active;
    let onClick = this.props.onClick;
    
    if (active) {
      return <span>{children}</span>;
    }

    return (
      <a
        href=""
        onClick={e => {
          e.preventDefault();
          onClick();
        }}
      >
        {children}
      </a>
    );
  }
}

export default Link;
