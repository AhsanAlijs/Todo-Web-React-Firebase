import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/FirebaseConfig';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductedRoutes = ({ component }) => {

    const navigate = useNavigate();
    const [isUser, setIsUser] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/login');

            } else {
                setIsUser(true)

            }
        });
    }, [])

    return (
        isUser ?
            component : <Typography variant='h4' color={'initial'}>Loading...</Typography>
    )
}

export default ProductedRoutes