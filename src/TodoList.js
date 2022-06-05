import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addNewTodo = this.addNewTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }
  addNewTodo(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }
  deleteTodo(id) {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)],
    });
  }
  updateTodo(id, updatedTask) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, todo: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  render() {
    const todosDisplay = this.state.todos.map(item => (
      <Todo
        key={item.id}
        id={item.id}
        completed={item.completed}
        todo={item.todo}
        deleteTodo={this.deleteTodo}
        updateTodo={this.updateTodo}
        toggleTodo={this.toggleCompletion}
      />
    ));
    return (
      <div className='TodoList'>
        <h1>
          Todo List <span>A Simple React Todo List App.</span>
        </h1>
        <ul></ul>
        {todosDisplay}
        <NewTodoForm newTodo={this.addNewTodo} />
      </div>
    );
  }
}

export default TodoList;
