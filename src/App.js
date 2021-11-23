import './App.css';
import { useState } from 'react'
import ToDoTaskList from './components/ToDoTaskList'
import tasksReducer from './reducers/tasksReducer'
import SingleTask from './components/SingleTask';


const App = () => {
  return (
    <div className="todo-list">
      <ToDoTaskList title="Liste de choses à faire" />
    </div>
  );
}


export default App;
