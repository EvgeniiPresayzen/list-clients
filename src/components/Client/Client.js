import React from 'react';

import {Image, List} from 'semantic-ui-react';

const client = (props) => (
        <List.Item onClick={props.clicked}>
            <Image avatar src={props.avatar} />
            <List.Content>
                <List.Header as='a'>{props.name}</List.Header>
                <List.Description>
                    {props.title}
                </List.Description>
            </List.Content>
        </List.Item>
);

export default client;