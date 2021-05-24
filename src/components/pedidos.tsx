import React from 'react'
import { IconButton } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete';

interface TitleProps{
    k: number,
    task: {
        name: string,
        done: boolean,
    },
    toggle: (task: number) => void,
    remove: (task: number) => void,
}

function pedidos({k, task, toggle, remove}: TitleProps): JSX.Element {
    return (
        <div>
            <h1 style={{textDecoration: task.done ? 'line-through' : '' }} key={k}>{task.name}</h1>
            <IconButton color="primary"  onClick={() => toggle(k)} >
                {
                    task.done
                    ? <ClearIcon />
                    : <DoneIcon />
                }
            </IconButton>
            <IconButton color="secondary" onClick={() => remove(k)} >
                <DeleteIcon/>
            </IconButton>
        </div>
    )
}

export default pedidos

