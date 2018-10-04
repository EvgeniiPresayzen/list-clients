import React from 'react';

import {Image, List} from 'semantic-ui-react';

const client = (props) => (
        <List.Item>
            <Image size='mini' src={props.avatar}  floated='left'/>
            <List.Content>
                <List.Header>
                    {props.name}
                </List.Header>
                <List.Description>
                    {props.title}
                </List.Description>
            </List.Content>
        </List.Item>
);

export default client;