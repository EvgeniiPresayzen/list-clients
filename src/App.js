import React, { Component } from 'react';

import './App.css';

import SearchForm from '../src/containers/SearchForm/SearchForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo-list</h1>
        <SearchForm/>
      </div>
    );
  }
}

export default App;
