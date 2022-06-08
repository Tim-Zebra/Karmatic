import React, { useState } from 'react';
import { StyledForm} from './Form.Styled'
//Mutation imports
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

import SubmitButton from '../Buttons/SubmitButton';
import ToggleButton from '../Buttons/ToggleButton';

export default function SignupForm({ handleSubmit, handleLoginSignupToggle }) {
    // Button text content
    const submitButtonTextContent = 'Create Account';
    const toggleButtonTextContent = 'Back to Login';

    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '', confirmPassword: '' });
    const [createUser, { error, data }] = useMutation(CREATE_USER);
    const [showAlert, setShowAlert] = useState(false);


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
            // Updates user data. Need to do a "if passwords match" Option
            const userData = {
                username: userFormData.username,
                email: userFormData.email,
                password: userFormData.password,
            }
            const { data } = await createUser({
                variables: { ...userData },
            });
            Auth.login(data.createUser.token);
            // Hides alert if previously present
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setUserFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
    };

    const renderAlert = () => {
        if(showAlert) {
            return <div>NICE TRY !! {'>:('}</div>
        }
    }

    return (
        <StyledForm onSubmit={handleFormSubmit}>
            <label for="username">username</label>
            <input type="text" name="username" placeholder="Enter your username..." 
            value={userFormData.username} 
            onChange={handleInputChange}
            />

            <label for="email">email</label>
            <input type="text" name="email" placeholder="Enter your email..." 
            value={userFormData.email}
            onChange={handleInputChange}
            />

            <label for="password">password</label>
            <input type="password" name="password" placeholder="Type in your password..." 
            value={userFormData.password}
            onChange={handleInputChange}
            />

            <label for="password">confirm password</label>
            <input type="password" name="confirmPassword" placeholder="Confirm your password..." 
            value={userFormData.confirmPassword}
            onChange={handleInputChange}
            />

            <SubmitButton submit={handleSubmit} textContent={submitButtonTextContent} />
            {renderAlert()}
            <ToggleButton toggle={handleLoginSignupToggle} textContent={toggleButtonTextContent} />
        </StyledForm>
    );
}