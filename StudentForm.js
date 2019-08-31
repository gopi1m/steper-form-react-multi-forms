import React, { Component } from 'react'
import FormStudentDetails from './FornStudentDetails';
import FormPersonalDetails from './FormPerstonalDetails';
import Confirm from './Confirm';
import Success from './Success';


export class StudentForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        hobies:'',
        email:'',
        city: '',
        DOB: ''
    }
    //Proceed to next step
    nextStep =() => {
        const { step} = this.state;
        this.setState({
            step: step + 1
        });
    }

    //Go back to prev step
    prevStep =() => {
        const { step} = this.state;
        this.setState({
            step: step - 1
        });
    }

    //Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }




    render() {
        const { step } = this.state;
        const { firstName, lastName, email, city,bio } =this.state;
        const values = { firstName, lastName, email, city,bio }
         
        switch(step) {
            case 1:
                return (
                    <FormStudentDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                );
                case 2:
                        return (
                            <FormPersonalDetails
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                            />
                        );
                case 3:
                        return (
                            <Confirm
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            values={values}
                            />
                        );
                case 4:
                    return <Success />;   
                
        }
    }
}

export default StudentForm
