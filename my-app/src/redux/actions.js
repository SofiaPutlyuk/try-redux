import {nanoid} from "nanoid"
export const addTask = (text) => ({
    type:"tasks/addTask",
    payload: {
    id:nanoid(),
    text,
    completed:false
    }
})
export const removeTask = (id) => ({
    type:"tasks/removeTask",
    payload:id
})
export const toggleTask  = (id) => ({
    type:"tasks/toggleTask",
    payload:id
})
export const editTask = (id , changes) => ({
    type:"tasks/editTask",
    payload:{changes,id}
})