import React, { useState } from 'react';
import { StyledForm, OrDiv } from "./Form.Styled"

// Mutation imports
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

// Component imports
import SubmitButton from '../Buttons/SubmitButton'
import ToggleButton from '../Buttons/ToggleButton'

export default function LoginForm({ handleSubmit, handleLoginSignupToggle }) {
    // Button text content
    const toggleButtonTextContent = 'Sign Up';
    const submitButtonTextContent = 'Login';

    // Sets hooks for userform data, and invalid info
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);
    const [showAlert, setShowAlert] = useState(false);

    // Updates form state based on input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({
            ...userFormData,
            [name]: value
        });
    };

    const handleFormSubmit = async (event) => {
        console.log('HANDLE FORM SUBMIT HAPPENED');
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            console.log('USERFORM DATA BEFORE TRY', userFormData);
            const { data } = await login({
                variables: { ...userFormData },
            });

            Auth.login(data.login.token);
            console.log('YOU ARE LOGGED');
            // Hides alert if previously present
            setShowAlert(false);
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setUserFormData({
            username: '',
            password: '',
        });
    };

    const renderAlert = () => {
        if (showAlert) {
            return <div>WRONG INFO!!</div>
        }
    }

    return (
        <StyledForm onSubmit={handleFormSubmit}>
            <label for="username">Username</label>
            <input
                type="text"
                name="username"
                placeholder="Enter your username..."
                value={userFormData.username}
                onChange={handleInputChange}
            />

            <label for="password">password</label>
            <input
                type="password"
                name="password"
                placeholder="Type in your password..."
                value={userFormData.password}
                onChange={handleInputChange}
            />


            <SubmitButton submit={handleSubmit} textContent={submitButtonTextContent} />
            {renderAlert()}
            <OrDiv>
                <hr /> or <hr />
            </OrDiv>
            <ToggleButton toggle={handleLoginSignupToggle} textContent={toggleButtonTextContent} />
        </StyledForm>
    );
}