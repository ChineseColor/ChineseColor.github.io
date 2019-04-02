import React, { Component } from 'react';
import './App.css';
import Menu from './menu/menu';
import Main from './main/main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu></Menu>
        <Main></Main>
      </div>
    );
  }
}

export default App;
