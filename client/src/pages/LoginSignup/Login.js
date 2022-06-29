import React from 'react'
import LoginForm from './components/Forms/LoginForm'
import { LoginSignUpBody } from './LoginSignUp.styled'

export default function Login({ handlePageChange }) {
    return (
        <LoginSignUpBody>
         <LoginForm />
         <div>
                <div>Looking to sign up? Sign up </div>
                <p onClick={() => handlePageChange('SignUp')}>Here!</p>
            </div>
        </LoginSignUpBody>
    )
}