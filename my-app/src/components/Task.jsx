import { TaskItem } from "./TaskItem";
export const Task = ({ tasks }) => {
  return (
    <ul>
       {tasks.map(t => (
        <TaskItem key={t.id} task={t} /> 
      ))}
    </ul>
  );
};