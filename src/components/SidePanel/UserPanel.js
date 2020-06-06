import React from 'react';

import { Grid,Header,Icon, Dropdown } from 'semantic-ui-react';

class UserPanel extends React.Component{

    DropdownOptions=()=>[
        {   
            key:"user",
            text:<span>signed in as<strong>User</strong></span>,
            disabled:true
        },
        {   
            key:"avatar",
            text:<span>Change Avatar</span>
        },
        {
            key:"signout",
            text:<span>Sign out</span>
        }
    ]

    render(){
        return(
            <Grid style={{ background: '#4c3c4c'}}>
                <Grid.Column>
                    <Grid.Row style={{padding:'1.2em',margin: 0}}>
                    {/*App header*/}

                    <Header inverted floated="left" as="h2">
                        <Icon name="code"/>
                        <Header.Content>DevChat</Header.Content>
                    </Header>

                    </Grid.Row>
                   {/* User Dropdown*/}
                   <Header style={{ padding:'0.25em'}} as="h4" inverted>
                       <Dropdown trigger={
                           <span>User</span>
                       } options={this.DropdownOptions()} />
                   </Header>

                </Grid.Column>
            </Grid>
        );
    }
}
export default UserPanel;