import React, {useState} from 'react'
import logo from '../assets/logo.png'
import {nanoid} from 'nanoid';

import TaskCard from './TaskCard.jsx'

export default function ToDo() {

  const[text, setText] = useState('');
  const[list, setList] = useState(['Starship test 2', 'Starship test 3']);

  function addTask(){
    setList(prevList => [...prevList, text]);
  }

  const showTasks = list.map(item => {
    return <TaskCard testo={item} />
  })


  return (
    <div className='to-do-container'>
        <div className='header'>
            <div>
                <img  className="logo" src={logo} alt="SpaceX logo"/>
                <h5>To-Do-list</h5>
            </div>
        </div>

        <div className='input-container'>
            <input type="text"
                   name={list}
                   className='input-spacex'
                   placeholder="Add a task to do..."
                   onChange={(e) => setText(e.target.value)}
            />
            <button className='add-btn' onClick={() => addTask()}>Add new task</button>
        </div>

        <div className='list-container'>
            <h2>ToDoList</h2>

            <div className='task-section'>
                {showTasks}
            </div>

        </div>
        
    </div>
  )
}
