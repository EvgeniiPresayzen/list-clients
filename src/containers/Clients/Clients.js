import React, { Component } from 'react';
import {List} from 'semantic-ui-react';
import { connect } from 'react-redux';

import Client from '../../components/Client/Client';

export class Clients extends Component {
    render(){
        return (
            <List selection verticalAlign='middle'>
                {this.props.clients.map(client => (
                    <Client
                        key={client.id}
                        name={client.general.firstName + ' ' + client.general.lastName}
                        title={client.job.title}
                        avatar={client.general.avatar}/>
                ))}
            </List>
        );
    }
}

const mapStateToProps = state => {
    return {
        clients: state.clients
    };
};
export default connect(mapStateToProps)(Clients);