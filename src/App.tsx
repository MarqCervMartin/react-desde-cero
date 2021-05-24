import React, { Fragment, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  Container,
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
} from '@material-ui/core';
import Pedido from './components/pedidos';

type FormElement = React.FormEvent<HTMLFormElement>
interface iTask{
  name: string,
  done: boolean,
}


function App(): JSX.Element {
  const classes = useStyles();
  const taskInput = useRef<HTMLInputElement>(null);
  const [newTask, setNewTask] = useState<string>('');
  const [tasks, setTasks] = useState<iTask[]>([]);
  

  const handleSubmit = (e: FormElement) =>{
    e.preventDefault();
    console.log('Enviando: ', newTask);
    addTask(newTask);
    setNewTask('');
    taskInput.current?.focus();
  }
  const addTask = (name : string): void =>{
    const newTask: iTask[] = [...tasks, {name, done: false} ] 
    setTasks(newTask);
  }
  const toggleDoneTask = (i: number): void =>{
    const newTasks: iTask[] = [...tasks];
    newTasks[i].done = !newTasks[i].done;
    setTasks(newTasks);
  }
  const removeTask = (i: number): void => {
    const newTasks: iTask[] = [...tasks];
    newTasks.splice(i,1);
    setTasks(newTasks);
  }
  return (
    <Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Card className={classes.root}>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <TextField 
                  id="outlined-basic" 
                  label="Pedido" 
                  variant="outlined" 
                  onChange={e => setNewTask(e.target.value)} 
                  value={newTask}
                  ref={taskInput}
                  autoFocus 
                />
                <CardActions>
                  <Button size="small">Save</Button>
                </CardActions>
              </form>
            </CardContent>
            {
            tasks.map((t: iTask, i: number) => <Pedido k={i} task={t} toggle={toggleDoneTask} remove={removeTask}/> )
            }
          </Card>

      </Container>
    </Fragment>
  );
}
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
export default App;
