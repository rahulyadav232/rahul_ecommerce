import { Box, Button, Container, Divider, Link, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';  // Adjust the import path as needed

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};
        if (!username.trim()) formErrors.username = 'Username is required';
        if (!email.trim()) formErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(email)) formErrors.email = 'Email is invalid';
        if (!password.trim()) formErrors.password = 'Password is required';
        else if (password.length < 6) formErrors.password = 'Password must be at least 6 characters long';

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;  // Returns true if no errors
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                navigate('/');  // Redirect to Home page
            } catch (error) {
                console.error('Registration Error:', error);
                alert('Registration failed. Please try again.');
            }
        }
    };

    return (
        <Box marginY={5}>
            <Container maxWidth='sm'>
                <Box marginY={2} component='form' onSubmit={handleRegister} noValidate>
                    <Typography variant='h4' textAlign='center'>
                        Register Here
                    </Typography>
                    <Typography variant='body1' textAlign='center'>
                        You're Just 1 Step Away
                    </Typography>

                    <TextField
                        variant='outlined'
                        label='Username'
                        type='text'
                        margin='normal'
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        error={!!errors.username}
                        helperText={errors.username}
                        required
                    />

                    <TextField
                        variant='outlined'
                        label='Email'
                        type='email'
                        margin='normal'
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={!!errors.email}
                        helperText={errors.email}
                        required
                    />

                    <TextField
                        variant='outlined'
                        label='Password'
                        type='password'
                        margin='normal'
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={!!errors.password}
                        helperText={errors.password}
                        required
                    />

                    <Button
                        variant='contained'
                        fullWidth
                        size='large'
                        sx={{ mt: 2, mb: 2 }}
                        type='submit'
                    >
                        Register
                    </Button>
                </Box>

                <Divider />

                <Box marginY={2}>
                    <Typography variant='body2'>
                        Already Have an Account?{' '}
                        <Link component={RouterLink} to='/login'>Click here to Login</Link>
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Register;
