import { Box, Button, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../config/firebase/FirebaseConfig"

const Homes = () => {

    const todo = useRef();
    const [daat, setData] = useState([]);

    const addTodo = async (e) => {
        e.preventDefault()
        console.log(todo.current.value);
        setData([...data, {
            todo: todo.current.value
        }]);
        try {
            const docRef = await addDoc(collection(db, "todo"), {
                todo: todo.current.value,
            });
            console.log("Document written with ID: ", docRef.id);
            todo.current.value = ''
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }


    return (

        <>
            <Box className='d-flex justify-content-center flex-column align-items-center gap-5      '>
                <form onSubmit={addTodo} className='d-flex justify-content-center mt-5 flex-column w-25 gap-3'>
                    <TextField id="filled-basic" label="Todo" variant="filled" required inputRef={todo} /> <br />
                    <Button variant="contained" type='submit'>Contained</Button>
                </form>
            </Box>
        </>
    )
}

export default Homes