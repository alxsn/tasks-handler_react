import React from "react";

import './AddTaskButton.css';

function AddTaskButton ({children, onClick}) {
    return <button onClick={onClick} className='button'>
        {children}
    </button>
}

export default AddTaskButton;