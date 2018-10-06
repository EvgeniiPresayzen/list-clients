import {Input} from "semantic-ui-react";
import React, {Component} from "react";
import { connect } from 'react-redux';

import './Search.css'
import * as actions from "../../store/actions";

export class Search extends Component {
    render() {
        return (
            <Input className='Search' icon='search' placeholder='Search...' onChange={(e) => {
                this.props.getSearch(e.target.value);
            }} />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSearch: (value) => dispatch(actions.getSearch(value)),
    }
};

export default connect(null, mapDispatchToProps)(Search);