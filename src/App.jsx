import React, { useState } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import TaskDetails from './components/TaskDetails'
import "./App.css"

const App = () => {
  // let message = 'Hello world2!'
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'estudar programação',
      completed: false
    },
    {
      id: '2',
      title: 'ler livros',
      completed: true
    }
  ]);

const handleTaskAddition = (taskTitle) => {
  const newTasks = [...tasks, {
    title: taskTitle,
    id: tasks.length+1,
    completed: false
  }]

  setTasks(newTasks);
}

const handleTaskDelete = (task) => {
  let indice = tasks.indexOf(task)
  console.log(indice)
  let newTasks = tasks.splice(indice, 1)
  newTasks = [...tasks]

  setTasks(newTasks)
}

const handleTaskClick = (taskId) => {
  const newTasks = tasks.map(task => {
    if(task.id === taskId) return {...task, completed: !task.completed}
    return task
  })

  setTasks(newTasks);
}

  return (
    <Router>
      <div className="container">
        
        <Route path='/' exact render={()=>(
          <>
            <AddTask handleTaskAddition={handleTaskAddition}/>
            <Tasks tasks={tasks} handleTaskClick={handleTaskClick}
            handleTaskDelete={handleTaskDelete}/>
            {console.log(tasks)}
          </>
        )}/>
        <Route path='/:taskTitle' exact component={TaskDetails}/>       
      </div>
    </Router>   
  )
}

export default App;