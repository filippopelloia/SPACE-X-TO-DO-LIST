import React, {useState} from 'react'
import logo from '../assets/logo.png'
import TaskCard from './TaskCard.jsx'

export default function ToDo() {

  const[text, setText] = useState('');
  const[list, setList] = useState([
    {id: 0, text:'Starship Flying Test 2', checked: false}, 
    {id: 1, text:'Going to Mars', checked: false}
  ]);



  function checkTask(itemId){
    setList(prevList => {
      return prevList.map(item => {
        if(item.id === itemId){
          return {
            ...item,
            checked: !item.checked
          };
        }
        return item;
      })
    })
  }


  function deleteTask(itemId){
    setList(prevList => prevList.filter(item => itemId !== item.id))
  }


  function editedText(e){
    setText(e.target.value);
  }


  function updateTask(itemId, newText){
    setList(prevList => {
      return prevList.map(item => {
      if(item.id === itemId){
        return {
          ...item,
          text: newText
        };
      }
      return item;
      })
    })
  }



  function addTask(){
    if(text !== ''){
      const newTask = {id: list.length, text: text, checked: false};
      setList(prevList => [...prevList, newTask]);
    }
  }


  const showTasks = list.map(item => {
    return <TaskCard key={item.id}
                     itemId={item.id}
                     testo={item.text} 
                     check={item.checked}
                     checkFunction={(itemId) => checkTask(itemId)} 
                     deleteFunction={(itemId) => deleteTask(itemId)}
                     editedText={(e) => editedText(e)}
                     updateTask={(itemId, newText) => updateTask(itemId, newText)}
          />
  })



  console.log(list);
  console.log(text);


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
