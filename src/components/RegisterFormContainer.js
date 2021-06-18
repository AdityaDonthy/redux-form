import React, { Component } from 'react'
import RegisterForm from './RegisterForm'

class RegisterFormContainer extends Component {
    submit = (values) => {
        console.log(values)
        window.alert(JSON.stringify(values, null, 4));
    }
    getInitialValues = () => ({
        preference: 'tabs',
        signUp: true
    })
    render() {
        return (
            <div>
                <RegisterForm onSubmit={this.submit} initialValues={this.getInitialValues()}/>
            </div>
        )
    }
}

export default RegisterFormContainer