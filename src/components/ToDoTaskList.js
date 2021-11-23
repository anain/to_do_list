import React from 'react'
import { connect } from 'react-redux'
import SingleTask from './SingleTask'
import NewTask from './NewTask'
import store from '../store/store'


const ToDoTaskList = ({toDoTasks, title, order}) => {
    const handleOrder = () => {
        if (order == 1)
            document.getElementById('orderButton').innerHTML = 'Voir les tâches les plus anciennes en premier'
        else
            document.getElementById('orderButton').innerHTML = 'Voir les tâches les plus récentes en premier'
        store.dispatch({
            type: 'ORDER_TASKS',
            payload: {order: order}
        })
    }


    return (
        <div class='list-content'>
            <h1>{title}</h1>
            <button id='orderButton' value="old_first" onClick={handleOrder}>Voir les tâches les récentes en premier</button>
            <div className='task-list'>
            <div className="single-task">
                <NewTask toDoTasks={toDoTasks} />
            </div>
            {toDoTasks.map(function (singleTask) {
                return (
                    <div className="single-task">
                        <SingleTask name={singleTask.name} id={singleTask.id} checked={singleTask.checked} />
                    </div>
                )
            })}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        toDoTasks: state.toDoTasks,
        order: state.order,
    }
 }

 
export default connect(mapStateToProps)(ToDoTaskList)