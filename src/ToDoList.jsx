import React, {useState} from 'react'

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState()
    const [darkMode, setDarkMode] = useState(true)

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {

        if(newTask != ""){
            setTasks(t => [...t, newTask])
            setNewTask("");
        }
    }

    function deleteTask(index) {

        setTasks(tasks.filter((_, i) => i !== index))
    }

    function moveTaskUp(index) {

        if(index > 0)
        {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {

        if(index < tasks.length - 1)
        {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
        
    }

    function handleDarkMode() {
        setDarkMode(!darkMode);
        
        if(!darkMode) {
            document.body.style.backgroundColor = "#282c34";
            document.body.style.color = "#abb2bf";
        }
        else{
            document.body.style.backgroundColor = "#f5f5f5";
            document.body.style.color = "#333";
        }
    }

    return(
        <div className={`to-do-list ${darkMode ? 'dark-mode' : ''}`}>

        <div className='header'>
            <h1 className='title'>To-Do-List</h1>
            <button className='color-scheme-toggle' onClick={handleDarkMode}>
                {darkMode ? "D" : "L"}
            </button>
        </div>

        <div>
            <input
                type='text'
                placeholder='Enter a task...'
                value={newTask}
                onChange={handleInputChange}
                className='task-input-text'/>
            <button onClick={addTask} className='add-task'>+</button>
        </div>
        <ul>
            {tasks.map((task, index) => 
            <div className='task'>
                <li key={index} className='task-name'>{task}</li>
                <div className='task-buttons'>
                    <button onClick={() => deleteTask(index)}>-</button>
                    <button onClick={() => moveTaskUp(index)}>&#8593;</button>
                    <button onClick={() => moveTaskDown(index)}>&#8595;</button>
                </div>
            </div>)}
        </ul>

    </div>)
}
export default ToDoList