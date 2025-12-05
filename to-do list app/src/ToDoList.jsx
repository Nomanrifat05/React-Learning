import React, { useState } from 'react';

function ToDoList() {

    const [tasks, setTasks] = useState(["Eat Breakfast", "Walk the dog", "Work out"]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event){

        setNewTask(event.target.value);


    }
    function addTask(){
        if(newTask.trim() !== ''){ //trim = remove whitespace
        setTasks(prevTasks => [...prevTasks, newTask]);
        setNewTask('');

    }

    }

    function deleteTask(index){
        // setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);

    }

    function moveTaskUp(index){
        // const updatedTasks = [...tasks];
        // if(index > 0){
        //     const temp = updatedTasks[index - 1];
        //     updatedTasks[index - 1] = updatedTasks[index];
        //     updatedTasks[index] = temp;
        //     setTasks(updatedTasks);
        // }


        if(index > 0){
            const updatedTasks = [...tasks];// creates a shallow copy of the tasks array to avoid direct mutation of state
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]; // it swaps the two elements . the one at index with the one before it. at first it creates an array with the two elements in swapped order, then it destructures that array to assign the values back to their respective positions in updatedTasks.
            setTasks(updatedTasks);
        }
    
    }

    function moveTaskDown(index){
         

        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }


    return (
        <div>
            <h1>To-Do List</h1>
            <div>
                <input 
                    type="text"
                    placeholder='Enter a task...' 
                    value={newTask}
                    onChange={handleInputChange}

                />
                <button className='add-button ' onClick={addTask}>Add Task</button>
            </div>
            <ol>
                {tasks.map((task, index) =>
                <li key={index}>
                      <span className='text'>{task}</span>
                      <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                        <button className='up-button' onClick={() => moveTaskUp(index)}>⬆️</button>
                        <button className='down-button' onClick={() => moveTaskDown(index)}>⬇️</button>
                </li>
                )}
            </ol>
        </div>
    );


}
export default ToDoList;
