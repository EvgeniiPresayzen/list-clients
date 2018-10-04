import React, { Component } from 'react';
import { connect } from 'react-redux';

import Clients from '../Clients/Clients';
import Search from '../../components/Search/Search';
import * as actions from '../../store/actions/index';
import './SearchForm.css';

export class SearchForm extends Component {
    componentDidMount () {
        this.props.onInitClients();
    }

    render(){
        return (
            <div className="five wide column SearchForm" style={{paddingRight: 0}}>
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
export default connect(null, mapDispatchToProps)(SearchForm);