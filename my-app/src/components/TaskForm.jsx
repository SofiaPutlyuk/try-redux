import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/actions";
import { Task } from "./Task";
import { useState } from "react";
export const TaskForm = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks)
    const [text , setText] = useState("")
    const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addTask(text))
    setText("")
    }
    return(
        <form>
            <input type="text" name="text" placeholder="Enter task text ..."/>
            <button type="submit" onClick={handleSubmit}>Add</button>
           <Task tasks={tasks} />
        </form>
    )
}