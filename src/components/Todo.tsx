import React, { ReactElement } from 'react';
import TextField from '@mui/material/TextField';

interface Props {
  text: string;
}

function Todo({ text }: Props): JSX.Element {
  return (
    <TextField
      id="outlined-basic"
      color="primary"
      value={text}
      InputProps={{
        readOnly: true,
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
  );
}

export default Todo;
