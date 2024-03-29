import React from 'react';
import TodoItem from '../todoitem/todoitem';

class TodoList extends React.Component {
  filteredTodoList = () => {
    const { activeFilter, todoList } = this.props;

    switch (activeFilter) {
      case 'active':
        return todoList
          .filter(todo => todo.status === false);
      case 'completed':
        return todoList
          .filter(todo => todo.status === true);
      default:
        return todoList;
    }
  }

  render() {
    const {
      deleteItem,
      chooseFinishTask,
      changeTodoItem,
      editItem,
    } = this.props;

    return (
      <ul className="todo-list">
        {this.filteredTodoList().map(todo => <TodoItem
            editItem={editItem}
            todo={todo}
            deleteItem={deleteItem}
            chooseFinishTask={chooseFinishTask}
            changeTodoItem={changeTodoItem}
          />)}
      </ul>
    );
  }
}

export default TodoList;
