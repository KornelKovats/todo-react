import React, { Dispatch, SetStateAction } from 'react';
import TextField from '@mui/material/TextField';
import Bin from '../bin5.png';
import { Todo } from '../App';

interface Props {
  id: string;
  text: string;
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

function TodoComponent({ id, text, setTodos }: Props): JSX.Element {
  const handleDeleteTodo = (): void => {
    console.log(id);
    setTodos((oldTodos) => oldTodos.filter((oldTodo) => oldTodo.id !== id));
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
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
      <img
        src={Bin}
        onClick={handleDeleteTodo}
        style={{ width: 50, height: 50 }}
      />
    </div>
  );
}

export default TodoComponent;
