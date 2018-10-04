import React, { Component } from 'react';

import './App.css';

import SearchForm from '../src/containers/SearchForm/SearchForm';
import Details from '../src/components/Details/Details';

class App extends Component {
  render() {
    return (
      <div className="ui centered two column grid">
            <SearchForm/>
            <Details/>
      </div>
    );
  }
}

export default App;
