import { Box, Button, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { createUserWithEmailAndPassword } from "firebase/auth";


const Login = () => {

    // useState

    const [loading, setLoading] = useState(false)

    // get Form value by useRef

    const email = useRef();
    const password = useRef();


    // function Logni

    const userLogin = (e) => {
        e.preventDefault();
        console.log('clicked');
        console.log(email.current.value);
        console.log(password.current.value);
        setLoading(loading === true ? false : true)
        email.current.value = ''
        password.current.value = ''

    }

    return (
        <>
            <Box sx={{ height: '80vh' }} className='d-flex justify-content-center' >
                <form onSubmit={userLogin} className='d-flex justify-content-center flex-column w-25 gap-5'>
                    <TextField type='email' id="standard-basic" label="Email" variant="standard" inputRef={email} required />

                    <TextField type='password' id="standard-basic" label="Password" variant="standard" inputRef={password} required />

                    <Button type='submit' variant="contained">{loading ? <CircularProgress sx={{ color: '#fff' }} size={20} /> : 'Loading'}</Button>
                </form>
            </Box>
        </>
    )
}

export default Login