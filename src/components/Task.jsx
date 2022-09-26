import React from "react";
import { useHistory } from "react-router-dom";

import './Task.css';

// export default class Task extends React.Component {
//     render ({task}) {
//         return (
//             <h1>{task.title}</h1>
//         )
//     }
// }

const Task = ({task, handleTaskClick, handleTaskDelete}) => {
    const history = useHistory()

    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`)
    }

    return (
        <div className='task-container'
        style={task.completed ? {borderLeft: "6px solid chartreuse"} : {}}
        >
            <div className='task-title-container'
            onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>
            <div className='buttons-container'>
                <button className='info-task-button'
                onClick={handleTaskDetailsClick}>@</button>
                <button className='remove-task-button'
                onClick={() => handleTaskDelete(task)}>x</button>
            </div>            
        </div>
    )
}

export default Task;