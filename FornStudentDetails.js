import React, { Component } from 'react';
import MuiThemeProvider from 
'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export class   FormStudentDetails  extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values , handleChange} = this.props;
        return ( 
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Student Details" />
                    <TextField 
                     hintText="Enter Your First Name"
                     FloatingLabelText="First Name"
                     onChange={handleChange('firstName')}
                     defaultValue={values.firstName}
                     />
                     <br />

                     <TextField 
                     hintText="Enter Your Last Name"
                     FloatingLabelText="Last Name"
                     onChange={handleChange('lastName')}
                     defaultValue={values.lastName}
                     />

                     <br />

                     <TextField 
                     hintText="Enter Your Email"
                     FloatingLabelText="Email"
                     onChange={handleChange('email')}
                     defaultValue={values.email}
                     />
                     <br />
                     <TextField 
                     hintText="Enter Your Hobbies"
                     FloatingLabelText="Hobbies"
                     onChange={handleChange('hobbies')}
                     defaultValue={values.hobbies}
                     />
                     <br />
                     <RaisedButton
                    label="Continue"
                    primary={true}
                    style={StyleSheet.button}
                    onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}
  
export default  FormStudentDetails;
