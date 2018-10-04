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
            <List verticalAlign='middle'>
                <Image src={avatar} floated='left'/>
                <List.Content>
                <List.Item>
                    <List.Content><h1>{name}</h1></List.Content>
                </List.Item>
                <List.Item>
                    <List.Content><h3>{company}</h3></List.Content>
                </List.Item>

                <List.Item>
                    <List.Icon name='marker' />
                    <List.Content>{street}</List.Content>
                </List.Item></List.Content>
                <List.Item>
                    <List.Icon name='mail' />
                    <List.Content>
                        <a href={email}>{email}</a>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='phone' />
                    <List.Content>
                        <List.Content>{phone}</List.Content>
                    </List.Content>
                </List.Item>
            </List>
    );
};

export default details;