import React, { useState } from 'react'
import store from '../store/store'


const NewTask = () => {
    const [newTaskName, setNewTaskName] = useState('')
  
    const handleKey = event => {
        if (event.key == 'Enter')
        {
            store.dispatch({
                type: 'ADD_NEW_TASK',
                payload:  {name: newTaskName, id: Date.now(), checked: false}
            })
            setNewTaskName('')
        }
    }

    return (
        <div className='new-task'>
            <input type="text" onChange={e => setNewTaskName(e.target.value)} value={newTaskName} placeholder="Nouvelle tâche" onKeyPress={handleKey} />
        </div>
    );
}


export default NewTask