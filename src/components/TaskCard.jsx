import React, {useState} from 'react'

import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


export default function TaskCard(props) {

    const[check, setCheck] = useState(false);

    function checkTask(){
        setCheck(prevCheck => !prevCheck)
    }


    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div className='task-card'>
        <h3>{props.testo}</h3>

        <div className='icons'>
            <Checkbox {...label} onClick={() => checkTask()} />
            <EditIcon/>
            <DeleteIcon/>
        </div>
    </div>
  )
}
