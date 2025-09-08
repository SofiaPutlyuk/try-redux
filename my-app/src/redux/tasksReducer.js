import { useSelector } from "react-redux";
import { StatusTask } from "./types";
import { useDispatch } from "react-redux";
export const ActionApp = () => {
    
    const action = useSelector(state => state.action)
    const dispatch  = useDispatch()
    const handleADD = (event) => {
    event.preventDefault()
    dispatch({type:"action/setAction" , payload:StatusTask.ADD_TASK})
    }
    const handleREMOVE = (event) => {
         event.preventDefault()
         dispatch({type:"action/setAction" , payload:StatusTask.REMOVE_TASK})
    }
    const handleToggle = (event) => {
        event.preventDefault()
        dispatch({type:"action/setAction" , payload:StatusTask.TOGGLE_TASK})
    }
    const handleEdit = (event) => {
        event.preventDefault()
        dispatch({type:"action/setAction" , payload:StatusTask.EDIT_TASK})
    }
    return (
        <div>
            <button aria-pressed={action === StatusTask.ADD_TASK} onClick={handleADD}>ADD</button>
            <button aria-pressed={action === StatusTask.REMOVE_TASK} onClick={handleREMOVE}>REMOVE</button>
            <button aria-pressed={action === StatusTask.TOGGLE_TASK} onClick={handleToggle}>TOGGLE</button>
            <button aria-pressed={action === StatusTask.EDIT_TASK} onClick={handleEdit}>EDIT</button>
        </div>
    )
}