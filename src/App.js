import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import SearchForm from '../src/containers/SearchForm/SearchForm';
import Details from './containers/Details/Details';


class App extends Component {
  render() {
    return (
      <div className="ui centered two column grid">
            <SearchForm/>
          {this.props.details.general
              ? <Details/>
              : <div className="eleven wide column"><p>Please Select User</p></div> }
      </div>
    );
  }
}
const mapStateToProps = state => {
    return {
        details: state.details
    };
};
export default connect(mapStateToProps)(App);
