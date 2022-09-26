import React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

import Button from './AddTaskButton';
import './TaskDetails.css';

export default function TaskDetails (task) {
    const params = useParams()
    const history = useHistory()

    const handleBackButtonClick = () => {
        history.goBack()
    }

    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </>
    )
}