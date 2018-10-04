import React, { Component } from 'react';

import {Input} from 'semantic-ui-react';

export class SearchForm extends Component {
    render(){
        return (
            <div>
                <Input icon='search' placeholder='Search...' />
            </div>
        );
    }
}
export default SearchForm;