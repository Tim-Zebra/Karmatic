import React from 'react'
import SignupForm from './components/Forms/SignupForm'
import { LoginSignUpBody } from './LoginSignUp.styled'

export default function SignUp({ handlePageChange }) {
    return (
        <LoginSignUpBody>
            <SignupForm />
            <div>
                <div>Already a Karmatic Member?</div>
                <p onClick={() => handlePageChange('Login')}>Login</p>
            </div>
        </LoginSignUpBody>
    )
}