import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { TextField } from '@mui/material';
import BasicTable from './basictable';
import { useState } from 'react';

export default function Login(props) {
  const [count, setCount] = useState(false);
  return (
    <>
    {count?"":<div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "15%"

      }}>


        <Stack spacing={2} direction="column" justifyContent={"center"} width={"300px"} alignItems={"center"}>
          <TextField id="filled-basic" label="username" variant="filled" />
          
          <TextField id="filled-basic" label="password" variant="filled" />
          <Button onClick={() => setCount(!count)} variant="contained">Login</Button>
        </Stack>


      </div>}
      
      <div>{count?<BasicTable />:""}
        
      </div>
    </>

  )

}