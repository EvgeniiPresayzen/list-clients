import React, { Component } from 'react';

import Clients from '../Clients/Clients';
import Search from '../../components/Search/Search';

export class SearchForm extends Component {
    render(){
        return (
            <div className="five wide column">
                <Search/>
                <Clients/>
            </div>
        );
    }
}
export default SearchForm;