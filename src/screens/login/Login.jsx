import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useContext, useRef, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { auth } from '../../config/firebase/FirebaseConfig'
import { signInWithEmailAndPassword } from "firebase/auth";
import UserContext from '../../context/user/userContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    // useState

    const [loading, setLoading] = useState(false)

    // get Form value by useRef

    const email = useRef();
    const password = useRef();

    // useContext

    const { setIsUser } = useContext(UserContext)

    const navigate = useNavigate();


    // function Logni

    const userLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                setIsUser(true)
                navigate('/')
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
        console.log('clicked');
        setLoading(loading === true ? false : true)
        email.current.value = ''
        password.current.value = ''

    }

    return (
        <>
            <Box sx={{ height: '80vh' }} className='d-flex justify-content-center' >
                <form onSubmit={userLogin} className='d-flex justify-content-center flex-column w-25 gap-5'>
                    <Typography variant='h4'>Login</Typography>
                    <TextField type='email' id="standard-basic" label="Email" variant="standard" inputRef={email} required />

                    <TextField type='password' id="standard-basic" label="Password" variant="standard" inputRef={password} required />

                    <Button type='submit' variant="contained">{loading ? <CircularProgress sx={{ color: '#fff' }} size={20} /> : 'Loading'}</Button>
                </form>
            </Box>
        </>
    )
}

export default Login