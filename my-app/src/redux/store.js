import {createStore} from "redux"
const initialState = {
    tasks:[
        {id:0 , text:"Марта іде вчити уроки"}, 
        {id:1 , text:"Марта не чемна 😫"}
    ]
}
const reducer = (state = initialState , action) => {
    switch(action.type){
        case "tasks/addTask":
            return {... state , tasks: [...state.tasks , action.payload]}
        case "tasks/removeTask":
            return {...state , tasks:state.tasks.filter(t => t.id !== action.payload)}
        case "tasks/toggleTask":
            return{
                ...state,
                tasks: state.tasks.map(t => t.id === action.payload ? {...t , completed:!t.completed} : t)
            }
        case "tasks/editTask":
            return{
                ...state,
                tasks:state.tasks.map(t => t.id === action.payload.id ? {...t , ...action.payload.changes} : t)
            }
        default:
            return state;
    }
}
export const store = createStore(reducer)