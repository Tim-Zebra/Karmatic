import React, { useState } from 'react';
import { StyledForm, TextInput, ErrorTextInput } from "./Form.Styled";

// Mutation imports
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../../../utils/mutations';
import Auth from '../../../../utils/auth';

// Component imports
// import SubmitButton from '../../../../GlobalComponents/Buttons/SubmitButton'
// import ToggleButton from '../../../../GlobalComponents/Buttons/ToggleButton'
import { FormPrettyButton } from '../../../../GlobalComponents/Buttons/PrettyButton.styled';

export default function LoginForm({ handleSubmit, handleLoginSignupToggle }) {
    // Button text content
    // const toggleButtonTextContent = 'Sign Up';

    // Sets hooks for userform data, and invalid info
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
    const [login] = useMutation(LOGIN_USER);
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

    const handleShowAlert = (event) => {
       if (event.target){
        setShowAlert(false)
       } 
    }
    // const renderAlert = () => {
    //     if (showAlert) {
    //         return <div>Incorrect username or password</div>
    //     }
    // }

    return (
        <>
        { showAlert ? 
        <StyledForm onSubmit={handleFormSubmit}>
            <h1>Login</h1>
            <label forHtml="username">username</label>
            <ErrorTextInput
                type="text"
                name="username"
                placeholder="username"
                value={userFormData.username}
                onChange={handleInputChange}
                onClick={handleShowAlert}
                
            />

            <label forHtml="password">password</label>
            <ErrorTextInput
                type="password"
                name="password"
                placeholder="password"
                value={userFormData.password}
                onChange={handleInputChange}
                onClick={handleShowAlert}
                
            />
            <p>username/password is incorrect</p>

            <FormPrettyButton submit={handleSubmit} >
                Login
            </FormPrettyButton>
        </StyledForm>
        :
        <StyledForm  onSubmit={handleFormSubmit}>
            <h1>Login</h1>
            <label forHtml="username">username</label>
            <TextInput
                type="text"
                name="username"
                placeholder="username"
                value={userFormData.username}
                onChange={handleInputChange}
                autoFocus
            />

            <label forHtml="password">password</label>
            <TextInput
                type="password"
                name="password"
                placeholder="password"
                value={userFormData.password}
                onChange={handleInputChange}
            />
            <FormPrettyButton submit={handleSubmit} >
                Login
            </FormPrettyButton>
        </StyledForm>
        }
        </>
    );
}