import { networkInterfaces } from 'os';
import React, { Fragment, useState } from 'react';

type FormElement = React.FormEvent<HTMLFormElement>
interface iTask{
  name: string,
  done: boolean,
}


function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>('');
  const [tasks, setTasks] = useState<iTask[]>([]);

  const handleSubmit = (e: FormElement) =>{
    e.preventDefault();
    console.log('Enviando: ', newTask);
    addTask(newTask);
    setNewTask('');
  }
  const addTask = (name : string) =>{
    const newTask: iTask[] = [...tasks, {name, done: false} ] 
    setTasks(newTask);
    console.log('Tasks: ', tasks);
  }
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={e => setNewTask(e.target.value)} value={newTask}/>
        <button>Save</button>
      </form>
      {
        tasks.map((t: iTask, i: number) => <h1 key={i}>{t.name}</h1>)
      }
    </Fragment>
  );
}

export default App;
