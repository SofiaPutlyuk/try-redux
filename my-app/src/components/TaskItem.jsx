import { useState } from "react"
import { useDispatch } from "react-redux"
import { removeTask , toggleTask , editTask } from "../redux/actions"
export const TaskItem = ({ task }) => {
  const [editText, setEditText] = useState(task.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTask(task.id, { text: editText }));
  };

  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={() => dispatch(toggleTask(task.id))} />
      <input type="text" value={editText} onChange={e => setEditText(e.target.value)} onBlur={handleEdit} />
      <button onClick={() => dispatch(removeTask(task.id))}>Delete</button>
    </li>
  );
};