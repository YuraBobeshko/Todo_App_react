import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: this.props.todo.title,
    };
  }

  inputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  }

  submitTodoForm = (event) => {
    const { todo: { id } } = this.props;
    const { inputValue } = this.state;

    event.preventDefault();
    this.props.editItem(inputValue, id);

    this.setState((prev) => {
      return {
        ...prev,
        inputValue: inputValue,
      };
    });
  }

  cancelEdit = (event) => {
    if (event.which !== 27) {
      return;
    }

    const { todo: { id } } = this.props;
    const { inputValue } = this.state;

    this.props.editItem(inputValue, id);
  }

  render() {
    const {
      deleteItem,
      chooseFinishTask,
      changeTodoItem,
      todo: {
        status, edit, id, title,
      },
    } = this.props;

    return (
      <li
        className={`${status === false
          ? ''
          : 'completed'}
        ${edit
        ? 'editing'
        : ''}`}
        key={id}
      >
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            checked={status}
            onChange={() => chooseFinishTask(id)}
          />
          <label
            htmlFor={`todo-${id}`}
            onDoubleClick={() => changeTodoItem(id)}
          >
            {title}
          </label>
          <button
            type="button"
            className="destroy"
            onClick={() => deleteItem(id)}
          />
        </div>
        {edit
          ? <form onSubmit={this.submitTodoForm}>
            <input
              type="text"
              autoFocus={true}
              className="edit"
              value={this.state.inputValue}
              onChange={this.inputChange}
              onKeyPress={this.cancelEdit}
            />
          </form>
          : ''}
      </li>
    );
  }
}

export default TodoItem;
