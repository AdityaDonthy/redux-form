import React from 'react'
import {Field, reduxForm} from 'redux-form'

function RegisterFormComponent(props) {
    console.log(props)
    return (
        <form>
            <div>
                <label>Name</label>
                <Field component='input' name='name' type='text' />
            </div>
            <div>
                <label>Preferred Spacing</label>
                <Field name='preferred' component='select'>
                    <option />
                    <option value="tabs">Tabs</option>
                    <option value="spaces">Spaces</option>
                </Field>
            </div>
            <div>
                <label htmlFor="signUp">Wanna be connected to me? Sign up</label>
                <Field component='input' type="checkbox" name='signUp' />
            </div>
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