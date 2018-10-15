import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../action";

class AddTodo extends Component {
  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.addTodoClick(this.input);
          }}
        >
          <input
            ref={node => {
              this.input = node;
            }}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }

  addTodoClick(input) {
    if (!input.value.trim()) {
      return;
    }
    this.props.addTodoAction(input.value);
    input.value = "";
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodoAction: text => {
      dispatch(addTodo(text));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
