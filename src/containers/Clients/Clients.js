import React, { Component } from 'react';
import {List} from 'semantic-ui-react';
import { connect } from 'react-redux';

import Client from '../../components/Client/Client';
import * as actions from '../../store/actions/index';

export class Clients extends Component {
    render(){
        return (
            <List selection verticalAlign='middle'>
                {this.props.clients.map((client, id) => (
                    <Client
                        key={id}
                        name={client.general.firstName + ' ' + client.general.lastName}
                        title={client.job.title}
                        avatar={client.general.avatar}
                        clicked={() => this.props.onSetDetails(id)}/>
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
const mapDispatchToProps = dispatch => {
    return {
        onSetDetails: (id) => dispatch(actions.setDetails(id))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Clients);