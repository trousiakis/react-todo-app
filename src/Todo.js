import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      todo: this.props.todo,
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleClick() {
    this.props.deleteTodo(this.props.id);
  }
  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  handleUpdate(e) {
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.todo);
    this.setState({ isEditing: false });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type='text'
              name='todo'
              value={this.state.todo}
              onChange={this.handleChange}
            ></input>
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <li>{this.props.todo}</li>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleClick}>delete</button>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
