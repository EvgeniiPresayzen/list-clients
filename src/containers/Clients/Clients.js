import React, { Component } from 'react';

import {List} from 'semantic-ui-react';

import Client from '../../components/Client/Client';

export class Clients extends Component {
    render(){
        return (
            <List selection verticalAlign='middle'>
                <Client/>
            </List>
        );
    }
}
export default Clients;