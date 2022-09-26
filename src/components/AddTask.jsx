import React, { useState } from "react";

import AddTaskButton from './AddTaskButton.jsx';
import './AddTask.css';

function AddTask({handleTaskAddition}){
    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    const handleAddTaskClick = () => {
        if(inputData.length !== 0){
            handleTaskAddition(inputData)
            setInputData('')
        }
    }

    return(
    <div className='add-task-container'>
        <input
            onChange={handleInputChange}
            value={inputData}
            className='add-task-input' type="text"
        />;
        <div className='add-task-button-container'>
            <AddTaskButton onClick={handleAddTaskClick}>
                Adicionar
            </AddTaskButton>
        </div>
    </div>
    ) 
}

export default AddTask;