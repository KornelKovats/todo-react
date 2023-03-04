import React, { ReactElement, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import TodoComponent from './components/TodoComponent';
import './App.css';

export interface Todo {
  id: string;
  text: string;
}

function App(): ReactElement {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodo(e.target.value);
  };

  const handleAddTodo = (): void => {
    setTodos((oldTodos: Todo[]): Todo[] => [...oldTodos, { id: Date.now().toString(), text: todo }]);
  };

  const handleEnterKeyDown = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter') {
      setTodos((oldTodos: Todo[]): Todo[] => [...oldTodos, { id: Date.now().toString(), text: todo }]);
    }
  };

  return (
    <div className="App">
      <CardActions sx={{ justifyContent: '', margin: '30px' }}>
        <TextField id="outlined-basic"
          label="Your todo"
          variant="outlined"
          onChange={handleChangeInput}
          onKeyDown={handleEnterKeyDown}
          color="primary"
          InputProps={{
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
        <Button
          variant="contained"
          onClick={handleAddTodo}
          style={{
            height: 50,
            color: '#fff'
          }}>
          Add/Edit
        </Button>
      </CardActions>
      <CardActions sx={{ display: 'flex', flexDirection: 'column', margin: '30px' }}>
        {todos.map((todoElement: Todo) => <TodoComponent
          text={todoElement.text}
          key={todoElement.id}
          id={todoElement.id}
          setTodos={setTodos}/>)}
      </CardActions>
    </div>
  );
}

export default App;
