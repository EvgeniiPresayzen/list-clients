import React from 'react';

import {Image, List} from 'semantic-ui-react';

const client = () => (
        <List.Item>
            <Image avatar src='' />
            <List.Content>
                <List.Header as='a'>Name</List.Header>
                <List.Description>
                    Job title
                </List.Description>
            </List.Content>
        </List.Item>
);

export default client;