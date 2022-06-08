import React, { useState } from 'react';
import { StyledForm, OrDiv } from "./Form.Styled"

// Mutation imports
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

// Component imports
import SubmitButton from '../Buttons/SubmitButton'
import ToggleButton from '../Buttons/ToggleButton'

export default function LoginForm({ handleSubmit, handleLoginSignupToggle }) {
    // Button text content
    const toggleButtonTextContent = 'Sign Up';
    const submitButtonTextContent = 'Login';

    // Sets hooks for userform data and login
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    // Updates form state based on input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({
            ...userFormData, 
            [name]: value
        });
      };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await login({
                variables: { ...userFormData },
            });

            Auth.login(data.login.token);
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setUserFormData({
            username: '',
            email: '',
            password: '',
        });
    };

    return (
        <StyledForm>
            <label for="email">Email</label>
            <input type="text" name="email" placeholder="Enter your email..." />

            <label for="password">password</label>
            <input type="password" name="password" placeholder="Type in your password..." />

            <SubmitButton submit={handleSubmit} textContent={submitButtonTextContent} />
            <OrDiv>
            <hr /> or <hr />
            </OrDiv>
            <ToggleButton toggle={handleLoginSignupToggle} textContent={toggleButtonTextContent} />
        </StyledForm>
    );
}