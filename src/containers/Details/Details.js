import React, { Component } from 'react';
import { connect } from 'react-redux';

import {Image, List} from 'semantic-ui-react';

export class Details extends Component {

    render()
    {
        let company = this.props.details.job.title + ' - '+ this.props.details.job.company;
        let name = this.props.details.general.firstName + ' ' + this.props.details.general.lastName;
        let street = this.props.details.address.street + ', '
            + this.props.details.address.city + ', '
            + this.props.details.address.zipCode + ', '
            + this.props.details.address.country;
        let phone = this.props.details.contact.phone;
        let email = this.props.details.contact.email;


        return(
            <div className="eleven wide column">
                    <Image src={this.props.details.general.avatar} size='medium' floated='left'/>
                    <h1>{name}</h1>
                    <h3>{company}</h3>
                    <List>
                        <List.Item>
                            <List.Icon name='marker' />
                            <List.Content>{street}</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='mail' />
                            <List.Content>
                                <a href='mailto:jack@semantic-ui.com'>{email}</a>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='phone' />
                            <List.Content>
                                <List.Content>{phone}</List.Content>
                            </List.Content>
                        </List.Item>
                    </List>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        details: state.details
    };
};

export default connect(mapStateToProps)(Details);