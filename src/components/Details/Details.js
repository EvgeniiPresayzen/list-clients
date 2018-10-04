import React from 'react';

import {Image, List} from 'semantic-ui-react';

const details = (props) => {
    let company = props.client.job.title + ' - '+ props.client.job.company;
    let name = props.client.general.firstName + ' ' + props.client.general.lastName;
    let street = props.client.address.street + ', '
        + props.client.address.city + ', '
        + props.client.address.zipCode + ', '
        + props.client.address.country;
    let phone = props.client.contact.phone;
    let email = props.client.contact.email;
    let avatar = props.client.general.avatar;

    return(
        <div>
            <Image src={avatar} floated='left'/>
            <List  floated='left'>
                <List.Item>
                    <List.Header as='h2'>{name}</List.Header>
                    <List.Description>
                        {company}
                    </List.Description>
                </List.Item>
                <List.Item
                    icon='marker'
                    content={street} />
                <List.Item
                    icon='mail'
                    content={<a href={email}>{email}</a>}
                />
                <List.Item
                    icon='phone'
                    content={phone}
                />
            </List>
        </div>
    );
};

export default details;