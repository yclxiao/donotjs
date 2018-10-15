import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../action";

class VisibleTodoList extends Component {
  render() {
    const { todos, liClick, filter} = this.props;

    const filterTodos = this.showTodosByFilter(todos,filter);

    return (
      <ul>
        {filterTodos &&
          filterTodos.map(todo => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.complete ? "line-through" : "none"
              }}
              onClick={() => liClick(todo.id)}
            >
              {todo.text}
            </li>
          ))}
      </ul>
    );
  }

  showTodosByFilter(todos,filter) {
    if (filter === 'FILTER_COMPLETED') {
      return todos.filter(todo => todo.complete);
    } else if (filter === 'FILTER_ACTIVE') {
      return todos.filter(todo => !todo.complete);
    } else if(filter === 'FILTER_ALL') {
      return todos;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.PageReducer.todos,
    filter: state.PageReducer.filter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    liClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTodoList);
