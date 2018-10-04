import React, { Component } from 'react';
import { connect } from 'react-redux';

import Clients from './containers/Clients/Clients';
import Search from './components/Search/Search';
import * as actions from './store/actions/index';
import './App.css';

export class App extends Component {
    componentDidMount () {
        this.props.onInitClients();
    }

    render(){
        return (
            <div>
                <Search/>
                <Clients/>
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInitClients: () => dispatch(actions.initClients()),
    }
};
export default connect(null, mapDispatchToProps)(App);
