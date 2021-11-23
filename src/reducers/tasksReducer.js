const initialState = {
  toDoTasks: [
    {
      id: Date.now(),
      name: 'Tâche 1',
      checked: false
    }
  ],
  order: 1,
}

const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'ADD_NEW_TASK':
        let tasks = []
        if (state.order == 1)
          tasks = [...state.toDoTasks, action.payload]
        else
          tasks = [action.payload, ...state.toDoTasks]
        return {
          ...state, 
          toDoTasks: tasks
        }
        case 'DELETE_TASK':
          return {
            ...state, 
            toDoTasks: state.toDoTasks.filter((item) => item.id != action.payload.id)
          }
        case 'UPDATE_CHECK':
          return {
            ...state,
            toDoTasks: state.toDoTasks.map(
              (singleTask) => singleTask.id === action.payload.id ? {...singleTask, checked: !singleTask.checked} 
                                                                  :  singleTask)
          }
          case 'ORDER_TASKS':
          return {
            ...state,
            toDoTasks: state.toDoTasks.slice().sort(function(t1, t2) {
              if (t1.id > t2.id)
                return -action.payload.order
              return action.payload.order
            }),
            order: -action.payload.order
          }
      default:
        return state
  };
}


export default tasksReducer