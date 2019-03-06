import React, { Component } from 'react';


class TodoForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      title: '',
      todos: [{title: ''}, {title: ''}, {title: ''}]
    };
  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleAddTodo = (e) => {
    e.preventDefault();

    let todo = {title: ''};
    // let {todos} = this.state;
    let todos = this.state.todos;
    todos.push(todo);


    this.setState({todos: todos});
  };

  updateTodo = (index, value) => {
    let {todos} = this.state;
    let todo = todos[index];
    todo.title = value;
    this.forceUpdate();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let todoList = this.state;

    todoList.todos = todoList.todos.filter((todo)=>{
      return !!todo.title;
    });

    this.props.createTodoList(todoList);

    this.setState({
      title: '',
      todos: [{title: ''}, {title: ''}, {title: ''}]
    });
  };

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="todoList">Todo List</label> <br/>
          <input type="text" className="form-control"
                 id="todoList" aria-describedby="todoListHelp"
                 placeholder="Todo List Title"
                 name="title"
                 value={this.state.title}
                 onChange={this.handleInput}
          /><br />
          <small id="emailHelp" className="form-text text-muted">Name your todo list: like Tuesday or Fun Things.</small>
        </div>

        <div>
          <button type="button" onClick={this.handleAddTodo}>Add a Todo</button>
        </div>

        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <li key={index}>
                <input type="text" className="form-control"
                   aria-describedby="todoListHelp"
                   placeholder="Todo Title"
                   name={`item-title-${index}`}
                   value={todo.title}
                   onChange={(e) => { this.updateTodo(index, e.target.value) }}
                />
              </li>
            );
          })}
        </ul>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}


class TodoCreateContainer extends Component {

  constructor(props){
    super(props);

    this.state = {

    }

  }

  createTodoList = (todoList) => {
    console.log(todoList);

    const conf = {
      method: "post",
      body: JSON.stringify(todoList),
      headers: new Headers({"Content-Type": "application/json"})
    };

    fetch('/api/todo-list/', conf).then((response) => {
      if (response.status !== 201) {
        return this.setState({placeholder: "Something went wrong"});
      }

      return response.json();
    }).then((todoList) => {
      this.props.route('home');
      // this.setState({todoList});
    });
  };

  render() {

    return (
      <div>
        <TodoForm createTodoList={this.createTodoList}/>
      </div>
    )
  }
}

export default TodoCreateContainer;


/*
<div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
 */