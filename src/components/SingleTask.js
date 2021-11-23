import store from '../store/store'


const SingleTask = ({name, id, checked}) => {
  const handleCheck = () => {
    store.dispatch({
        type: 'UPDATE_CHECK',
        payload: {id: id}
        })
    }

    const handleDelete = () => {
        store.dispatch({
            type: 'DELETE_TASK',
            payload: {id: id}
        })
    }

    return (
        <div class="task-content" id={id}>
            <input type="checkbox" id={id} onClick={handleCheck} checked={checked} />
            <label for={name} onClick={handleCheck}>{name}</label>
            <button className='checkButton' onClick={handleDelete}> X </button>
        </div>
    );
}


export default SingleTask