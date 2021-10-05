import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'
import { useState } from 'react'

function App() {
  const [showAddTask, toggleAddTask] = useState(false);

  const toggleAddTaskForm = () => {
    toggleAddTask(!showAddTask);
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(
      (task) => {
        if (task.id === id) {
          task.reminder = !task.reminder;
        }
        return task;
      }));
  }

  const addTask = (newTask) => {
    setTasks(tasks.concat({ id: tasks.length, text: newTask.text, day: newTask.day, reminder: newTask.reminder }))
    toggleAddTask(!showAddTask);
  }

  const cancelAddTask = () => {
    toggleAddTask(!showAddTask);
  }

  const deleteTask = (id) => {
    console.log('Delete', id)
    setTasks(tasks.filter((task) => task.id != id));
  }

  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: "Meeting 1",
      day: "Oct 4th at 16:00",
      reminder: true
    },
    {
      id: 1,
      text: "Get Dog Food",
      day: "Oct 30th",
      reminder: true
    },
    {
      id: 2,
      text: "Pickup computer from mom",
      day: "Oct 4th at 17:00",
      reminder: true
    },
    {
      id: 3,
      text: "Get harddrive",
      day: "Oct 5th",
      reminder: true
    }
  ])

  return (
    <div className="container">
      <Header title="ToDo3r" showAddTask={showAddTask} addTask={toggleAddTaskForm} />
      <AddTask cancelExecuted={cancelAddTask} showAddTask={showAddTask} addTaskExecuted={addTask} />
      <Tasks tasks={tasks} onDeleteTask={deleteTask} toggleReminder={toggleReminder} />
    </div>
  );
}

export default App;
