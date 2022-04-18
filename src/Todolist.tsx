import React from 'react';
import {FilterFaluesType} from './App';

export type tasksType = {
    id: number
    title: string
    isDone: boolean
}
type propsType = {
    title: string
    tasks: Array<tasksType>
    removeTask: (id:number) => void
    changeFilter: (value:FilterFaluesType) => void
}
export const Todolist = (props: propsType) => {

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>add +</button>
            </div>
            <ul>
                {props.tasks.map((t) => <li><input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={() => {props.removeTask(t.id)}}>X</button>
                </li>)}
            </ul>
            <div>
                <button onClick={ () => {props.changeFilter("all")} }>all</button>
                <button onClick={ () => {props.changeFilter("active")} }>active</button>
                <button onClick={ () => {props.changeFilter("completed")} }>completed</button>
            </div>
        </div>
    )
}