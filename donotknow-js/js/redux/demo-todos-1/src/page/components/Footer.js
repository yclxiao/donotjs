import React, { Component } from "react";
import { connect } from "react-redux";
import { filterVisible } from "../action";
import Link from "./Link";

class Footer extends Component {

  render() {
    let active = this.props.active;
    return (
      <p>
        Show:
        <Link filter="FILTER_ALL" onClick={this.props.linkClick.bind(this,'FILTER_ALL')} active={active === 'FILTER_ALL'}>
          All
        </Link>
        ,
        <Link filter="FILTER_ACTIVE" onClick={this.props.linkClick.bind(this,'FILTER_ACTIVE')} active={active === 'FILTER_ACTIVE'}>
          Active
        </Link>
        ,
        <Link filter="FILTER_COMPLETED" onClick={this.props.linkClick.bind(this,'FILTER_COMPLETED')} active={active === 'FILTER_COMPLETED'}>
          Completed
        </Link>
      </p>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.PageReducer.filter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    linkClick: (filter) => {
      dispatch(filterVisible(filter));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
