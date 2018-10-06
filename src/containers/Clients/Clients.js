import React, { Component } from 'react';
import {List, Tab, Menu} from 'semantic-ui-react';
import { connect } from 'react-redux';

import Client from '../../components/Client/Client';
import Details from '../../components/Details/Details';

import './Clients.css';
import Search from "../Search/Search";

export class Clients extends Component {
    render(){
        let panes = this.props.clients.map((client, id) => (
            { menuItem: (
                        <Menu.Item key={id}>
                            <List verticalAlign='middle'>
                                <Client
                                    name={client.general.firstName + ' ' + client.general.lastName}
                                    title={client.job.title}
                                    avatar={client.general.avatar} />
                            </List>
                        </Menu.Item>
                ),
                render: () => <Tab.Pane><Details client={client}/></Tab.Pane>}
        ));
        return (
            <div>
                <Search/>
                <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        clients: state.clients.filter(client =>
            client.general.firstName.toLowerCase().includes(state.search.toLowerCase()) ||
            client.general.lastName.toLowerCase().includes(state.search.toLowerCase()) ||
            client.job.title.toLowerCase().includes(state.search.toLowerCase()) ||
            client.job.company.toLowerCase().includes(state.search.toLowerCase()) ||
            client.address.city.toLowerCase().includes(state.search.toLowerCase()) ||
            client.address.country.toLowerCase().includes(state.search.toLowerCase()) ||
            client.contact.phone.toLowerCase().includes(state.search.toLowerCase())
        ),
        error: state.error,
    };
};
export default connect(mapStateToProps)(Clients);