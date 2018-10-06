import React, { Component } from 'react';
import { connect } from 'react-redux';

import {Message} from 'semantic-ui-react';
import Clients from './containers/Clients/Clients';
import * as actions from './store/actions/index';
import './App.css';

export class App extends Component {
    componentDidMount () {
        this.props.onInitClients();
    }

    render()
    {
        let display = this.props.error ?
            <Message negative>
                <Message.Header>Error!</Message.Header>
                <p>{this.props.errorMessage}</p>
            </Message>
            : <Clients/>;
        return (
            <div>
                {display}
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInitClients: () => dispatch(actions.initClients()),
    }
};
const mapStateToProps = state => {
    return {
        error: state.error,
        errorMessage: state.errorMessage
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
