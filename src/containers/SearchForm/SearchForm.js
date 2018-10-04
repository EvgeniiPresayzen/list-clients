import React, { Component } from 'react';
import { connect } from 'react-redux';

import data from '../../assets/Data/clients.json';

import Clients from '../Clients/Clients';
import Search from '../../components/Search/Search';
import * as actions from '../../store/actions/index';
import './SearchForm.css';

export class SearchForm extends Component {
    componentDidMount () {
        console.log(data[0]);
        this.props.onInitClients(data);
    }

    render(){
        return (
            <div className="five wide column SearchForm">
                <Search/>
                <Clients/>
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInitClients: (data) => dispatch(actions.setClients(data)),
    }
};
export default connect(null, mapDispatchToProps)(SearchForm);