import { Box, Button, CircularProgress, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
    return (
        <>
            <Box sx={{ height: '80vh' }} className='d-flex justify-content-center' >
                <form className='d-flex justify-content-center flex-column w-25 gap-5'>
                    <TextField type='email' id="standard-basic" label="Email" variant="standard" />
                    <TextField type='password' id="standard-basic" label="Password" variant="standard" />
                    <Button variant="contained"><CircularProgress sx={{ color: '#fff'}} size={20} /></Button>
                </form>
            </Box>
        </>
    )
}

export default Login