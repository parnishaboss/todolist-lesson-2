import React, {useState} from 'react';
import './App.css';
import {tasksType, Todolist} from './Todolist';

export type FilterFaluesType = "all" | "active" | "completed"

const App = () => {
    let [tasks, setTasks] =useState<Array<tasksType>>([
        {id: 1, title: "CSS", isDone:true},
        {id: 2, title: "JS", isDone:true},
        {id: 3, title: "React", isDone:false},
        {id: 4, title: "Redux", isDone:false}
    ])
    let [filter, setFilter] = useState<FilterFaluesType>("all")
    let removeTask = (id:number) => {
        let filteredTasks = tasks.filter(t => t.id !== id)
        // let filteredTasks = tasks.filter ( (t) => {
        //     if (t.id !== id) {
        //         return true;
        //     } else {
        //         return false
        //     }
        // })
        setTasks(filteredTasks)
    }
    let changeFilter = (value:FilterFaluesType) => {
        setFilter(value)
    }
    let tasksForTodolist = tasks;
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true)
    }
    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false)
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn?"
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
