import React from 'react';

import {Image, Grid, List} from 'semantic-ui-react';

const details = () => (
    <div  className="eleven wide column">
        <Grid>
            <Grid.Column width={4}>
                <Image src='/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column width={9}>
                <h1>Name</h1>
                <h3>job.title + job.company</h3>
                <List>
                    <List.Item>
                        <List.Icon name='marker' />
                        <List.Content>Street Test + City + ZipCode + Country</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='mail' />
                        <List.Content>
                            <a href='mailto:jack@semantic-ui.com'>jack@test.com</a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='phone' />
                        <List.Content>
                            <List.Content>+777777</List.Content>
                        </List.Content>
                    </List.Item>
                </List>
            </Grid.Column>
        </Grid>
    </div>
);

export default details;