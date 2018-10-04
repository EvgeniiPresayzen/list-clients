import React, { Component } from 'react';
import {List, Tab, Menu} from 'semantic-ui-react';
import { connect } from 'react-redux';

import Client from '../../components/Client/Client';
import Details from '../../components/Details/Details';

import './Clients.css';

export class Clients extends Component {
    render(){
        let panes = this.props.clients.map((client, id) => (
            { menuItem: (
                        <Menu.Item key={id}>
                            <List verticalAlign='middle'>
                                <Client
                                    name={client.general.firstName + ' ' + client.general.lastName}
                                    title={client.job.title}
                                    avatar={client.general.avatar}
                                />
                            </List>
                        </Menu.Item>
                ),
                render: () => <Tab.Pane><Details client={client}/></Tab.Pane>}
        ));
        return (
            <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
        );
    }
}

const mapStateToProps = state => {
    return {
        clients: state.clients
    };
};
export default connect(mapStateToProps)(Clients);