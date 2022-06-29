import React, { useState } from 'react';
import { StyledForm, TextInput, ErrorTextInput } from '../../../../GlobalComponents/Forms/Form.Styled'
//Mutation imports
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../../../utils/mutations';
import Auth from '../../../../utils/auth';

// import SubmitButton from '../../../../GlobalComponents/Buttons/SubmitButton';
// import ToggleButton from '../../../../GlobalComponents/Buttons/ToggleButton';
import { FormPrettyButton } from '../../../../GlobalComponents/Buttons/PrettyButton.styled';

export default function SignupForm({ handleSubmit, handleLoginSignupToggle }) {

    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '', confirmPassword: '' });
    const [createUser] = useMutation(CREATE_USER);
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

    const handleShowAlert = (event) => {
        if (event.target){
         setShowAlert(false)
        } 
     }

    return (
        <>
        { showAlert ? 
        <StyledForm onSubmit={handleFormSubmit}>
            <h1>Sign Up</h1>
            <label for="username">username</label>
            <ErrorTextInput type="text" name="username" placeholder="username"
                value={userFormData.username}
                onChange={handleInputChange}
                onClick={handleShowAlert}
                
            />

            <label for="email">email</label>
            <ErrorTextInput type="email" name="email" placeholder="email"
                value={userFormData.email}
                onChange={handleInputChange}
                onClick={handleShowAlert}
            />

            <label for="password">password</label>
            <ErrorTextInput type="password" name="password" placeholder="password"
                value={userFormData.password}
                onChange={handleInputChange}
                onClick={handleShowAlert}
            />
            <ErrorTextInput type="password" name="confirmPassword" placeholder="confirm password"
                value={userFormData.confirmPassword}
                onChange={handleInputChange}
                onClick={handleShowAlert}
            />

            <FormPrettyButton submit={handleSubmit}>
                Create Account
            </FormPrettyButton>
            <p>Something went wrong, try again.</p>
        </StyledForm>
        : 
        
        <StyledForm onSubmit={handleFormSubmit}>

            <h1>Sign Up</h1>

            <label for="username">username</label>
                <TextInput type="text" name="username" placeholder="username"
                    value={userFormData.username}
                    onChange={handleInputChange}
                    autoFocus />

            <label for="email">email</label>
                <TextInput type="email" name="email" placeholder="email"
                    value={userFormData.email}
                    onChange={handleInputChange}/>

            <label for="password">password</label>
            <TextInput type="password" name="password" placeholder="password"
                value={userFormData.password}
                onChange={handleInputChange} />
            <TextInput type="password" name="confirmPassword" placeholder="confirm password"
                value={userFormData.confirmPassword}
                onChange={handleInputChange} />

            <FormPrettyButton submit={handleSubmit}>
                Create Account
            </FormPrettyButton>
            
    </StyledForm>
        }
        </>
    );
}