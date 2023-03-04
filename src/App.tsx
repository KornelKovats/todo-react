import React, { ReactElement, useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

function app(): ReactElement {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <CardActions sx={{ justifyContent: 'center', margin: '30px' }}>
        <TextField id="outlined-basic" label="Your todo" variant="outlined" color="primary" InputProps={{
          style: {
            color: 'white',
            border: '2px solid white',
            width: 400,
            height: 50,
            margin: '10px'
          }
        }}
        InputLabelProps={{
          style: {
            color: '#fff'
          }
        }}/>
        <Button variant="contained"
          style={{
            height: 50,
            color: '#fff'
          }}>
          Add/Edit
        </Button>
      </CardActions>
    </div>
  );
}

export default app;
