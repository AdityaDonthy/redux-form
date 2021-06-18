import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {customInput, customSelect} from './fields'

function RegisterFormComponent({handleSubmit}) {
    return (
        <form onSubmit={handleSubmit}>
            <Field 
                component={customInput}
                name='name' 
                type='text' 
                label='Name'
                />

            <Field 
                name='preference'
                component={customSelect}
                label='Preferred Spacing' />
            
            <Field 
                component={customInput} 
                type="checkbox" 
                name='signUp' 
                label='Wanna be connected to me? Sign up'
                />
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}

const RegisterForm = reduxForm({
    form: 'register'
})(RegisterFormComponent);

export default RegisterForm;