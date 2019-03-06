import React, { Component } from 'react';

import HomeContainer from './Home';
import TodoCreateContainer from './TodoCreate';

class App extends Component {

  constructor(props){
    super(props);

    this.state ={
      screen: 'home'
    }

  }

  route = (screen) => {
    this.setState({screen});
  };

  render() {
    if(this.state.screen == 'home') {
      return <HomeContainer route={this.route}/>;

    }else if(this.state.screen == 'create'){
      return <TodoCreateContainer route={this.route}/>;

    }else if(this.state.screen == 'detail'){
      return null;

    }else{
      return null;

    }
  }
}

export default App;
