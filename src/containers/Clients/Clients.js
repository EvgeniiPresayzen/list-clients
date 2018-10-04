import React, { Component } from 'react';

import {List, Input, Image} from 'semantic-ui-react';

import Client from '../../components/Client/Client';

export class Clients extends Component {
    render(){
        return (
            <div>
                <Input icon='search' placeholder='Search...' />
                <List selection verticalAlign='middle'>
                    <List.Item>
                        <Image avatar src='/images/avatar/small/helen.jpg' />
                        <List.Content>
                            <List.Header>Helen</List.Header>
                        </List.Content>
                    </List.Item>
                </List>
            </div>
        );
    }
}
export default Clients;