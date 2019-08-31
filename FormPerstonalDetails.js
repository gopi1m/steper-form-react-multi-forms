import React, { Component } from 'react';
import MuiThemeProvider from 
'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export class   FormPersonalDetails  extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values , handleChange} = this.props;
        return ( 
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Personal Details" />
                    <TextField 
                     hintText="Enter Your City"
                     FloatingLabelText="City"
                     onChange={handleChange('city')}
                     defaultValue={values.city}
                     />
                     <br />

                     <TextField 
                     hintText="Enter Your DOB"
                     FloatingLabelText="DOB"
                     onChange={handleChange('dob')}
                     defaultValue={values.dob}
                     />

                     <br />

                     <TextField 
                     hintText="Enter Your Email"
                     FloatingLabelText="Email"
                     onChange={handleChange('email')}
                     defaultValue={values.email}
                     />
                     <br />
                     <RaisedButton
                    label="Continue"
                    primary={true}
                    style={StyleSheet.button}
                    onClick={this.continue}
                    />

                    <RaisedButton
                    label="Back"
                    primary={false}
                    style={StyleSheet.button}
                    onClick={this.back}
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
  
export default  FormPersonalDetails;
