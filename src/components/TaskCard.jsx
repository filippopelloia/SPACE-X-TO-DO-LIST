import React, {useState} from 'react'

import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


export default function TaskCard(props) {


    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div className='task-card'>
        {props.check ? <h3 style={{textDecoration: 'line-through', color: 'red'}}>
          {props.testo}
        </h3> 
        : <h3>
          {props.testo}
        </h3>
        }

        <div className='icons'>
            <Checkbox {...label} onClick={() => props.checkFunction(props.itemId)} />
            <EditIcon/>
            <DeleteIcon onClick={() => props.deleteFunction(props.itemId)}/>
        </div>
    </div>
  )
}
