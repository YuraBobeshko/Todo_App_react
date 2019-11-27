import React from 'react';
import TodoList from '../TodoList/TodoList';

class Main extends React.PureComponent {
  render() {
    const {
      todoList,
      deleteItem,
      chooseFinishTask,
      toggleAllTodos,
      activeFilter,
      changeTodoItem,
      editItem,
    } = this.props;

    return (
      <section className="main" style={{ display: 'block' }}>
        <input
          type="checkbox"
          id="toggle-all"
          className="toggle-all"
        />
        <label
          htmlFor="mark-all"
          onClick={toggleAllTodos}
        >
          Mark all as complete
        </label>
        <TodoList
          editItem={editItem}
          todoList={todoList}
          deleteItem={deleteItem}
          chooseFinishTask={chooseFinishTask}
          activeFilter={activeFilter}
          changeTodoItem={changeTodoItem}
        />
      </section>
    );
  }
}

export default Main;
