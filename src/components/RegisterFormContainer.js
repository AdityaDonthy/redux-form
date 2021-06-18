import React, { Component } from 'react'
import RegisterForm from './RegisterForm'

class RegisterFormContainer extends Component {
    submit = (values) => {
        console.log(values)
        window.alert(JSON.stringify(values, null, 4));
    }

    render() {
        return (
            <div>
                <RegisterForm onSubmit={this.submit}/>
            </div>
        )
    }
}

export default RegisterFormContainer