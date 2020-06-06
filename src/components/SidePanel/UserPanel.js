import React from 'react';



import { Grid,Header,Icon, Dropdown } from 'semantic-ui-react';

import firebase from '../../firebase';

class UserPanel extends React.Component{

    state={
        user:this.props.currentUser
    };

    

    DropdownOptions=()=>[
        {   
            key:"user",
            text:<span>signed in as<strong>{this.state.user.displayName}</strong></span>,
            disabled:true
        },
        {   
            key:"avatar",
            text:<span>Change Avatar</span>
        },
        {
            key:"signout",
            text:<span onClick={this.handleSignout}>Sign out</span>
        }
    ];

handleSignout=()=>{
    firebase
          .auth()
          .signOut()
          .then(()=>console.log("signed out!!"));
};



    render(){
        //log una user data gannna puluwen redux waling
        console.log(this.props.currentUser);
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
                           <span>{this.state.user.displayName}</span>
                       } options={this.DropdownOptions()} />
                   </Header>

                </Grid.Column>
            </Grid>
        );
    }
}


export default UserPanel;