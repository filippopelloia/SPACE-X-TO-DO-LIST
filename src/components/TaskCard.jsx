import * as React from 'react';

import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};



export default function TaskCard(props) {

    const [newText, setNewText] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    function handleSave() {
      props.updateTask(props.itemId, newText);
      handleClose();
    }


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
            <EditIcon onClick={handleOpen}/>
            <DeleteIcon onClick={() => props.deleteFunction(props.itemId)}/>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <h2 className='title-modal'>Edit Task</h2>

          <div className='edit-section'>
            <input type="text" 
                   className='input-edit'
                   placeholder="Edit your Task..." 
                   onChange={(e) => setNewText(e.target.value)}
            />
            <button className='add-btn' onClick={handleSave}>Save</button>
          </div>

        </Box>
      </Modal>

    </div>
  )
}
