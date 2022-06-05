import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import './NewTodoForm.css';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const newTodo = { ...this.state, id: uuid(), completed: false };
    this.props.newTodo(newTodo);
    this.setState({ todo: '' });
  }

  render() {
    return (
      <form className='NewTodoForm' onSubmit={this.handleSubmit}>
        <label htmlFor='todoText'>New todo</label>
        <input
          type='text'
          name='todo'
          value={this.state.todo}
          onChange={this.handleChange}
          id='todoText'
        ></input>
        <button>Add Todo</button>
      </form>
    );
  }
}

export default NewTodoForm;
