import React from 'react';
import Filter from '../filter/filter';

class Footer extends React.Component {
  clearCompletedTitle = () => {
    const { todoList } = this.props;

    return todoList
      .some(todo => todo.status === true);
  }

  render() {
    const {
      todoListLength,
      clearCompleted,
      activeFilter,
      handleActiveFilter,
    } = this.props;

    return (
      <footer className="footer" style={{ display: 'block' }}>
        <span className="todo-count">
          {todoListLength}
          {todoListLength !== 1 ? " items left" : " item left"}
        </span>
        <Filter
          activeFilter={activeFilter}
          handleActiveFilter={handleActiveFilter}
        />
        <button
          type="button"
          className="clear-completed"
          style={{ display: 'block' }}
          onClick={() => clearCompleted()}
        >
          {this.clearCompletedTitle() ? 'Clear completed' : ''}
        </button>
      </footer>
    );
  }
}

export default Footer;
