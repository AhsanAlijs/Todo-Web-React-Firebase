import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import { auth } from '../../config/firebase/FirebaseConfig'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [loading, setLoading] = useState(false)

    // get Form value by useRef

    const email = useRef();
    const password = useRef();

    const navigate = useNavigate();



    // function Logni

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                navigate('/login')
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
        console.log('clicked');
        console.log();
        console.log();
        setLoading(loading === true ? false : true)

    }



    return (
        <>
            <Box sx={{ height: '80vh' }} className='d-flex justify-content-center' >
                <form onSubmit={register} className='d-flex justify-content-center flex-column w-25 gap-5 '>
                    <Typography variant='h4'> Register</Typography>
                    <TextField type='email' id="standard-basic" label="Email" variant="standard" inputRef={email} required />

                    <TextField type='password' id="standard-basic" label="Password" variant="standard" inputRef={password} required />

                    <Button type='submit' variant="contained">{loading ? <CircularProgress sx={{ color: '#fff' }} size={20} /> : 'Loading'}</Button>
                </form>
            </Box>
        </>
    )
}

export default Register