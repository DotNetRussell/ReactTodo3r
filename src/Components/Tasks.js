import Task from './Task'


const Tasks = ({ tasks, onDeleteTask, toggleReminder }) =>
{
  return (
    <>
      {tasks.map((task) => (
        <Task onToggle={toggleReminder} key={task.id} task={task} onDeleteTask={onDeleteTask} />
       ))}     
    </>
  )
}

export default Tasks

