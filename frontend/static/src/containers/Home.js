import React, { Component } from 'react';

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <h1>Todo-ly App</h1>

        <button onClick={(e) => { this.props.route('create') }}>
          Add a Todo List
        </button>

        <ul>
          <li>List 1 <button>Edit</button></li>
          <li>List 2 <button>Edit</button></li>
        </ul>

      </div>
    );
  }
}

export default HomeContainer;
