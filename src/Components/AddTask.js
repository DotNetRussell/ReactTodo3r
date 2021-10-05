import { useState } from 'react'
import Button from './Button'

const AddTask = ({ addTaskExecuted, showAddTask, cancelExecuted }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text || !day) {
      console.log(e)
      alert('Please fill in fields');
      return;
    }

    addTaskExecuted({ text: text, day: day, reminder: reminder });
    setText('');
    setDay('');
    setReminder(false);
  }

  return (
    <div style={{ display: showAddTask ? "" : "none" }}>
      <form className='add-form' onSubmit={onSubmit}  >
        <div className="form-control">
          <label>Task Subject</label>
          <input type="text" placeholder="Subject" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="form-control">
          <label>Day and Time</label>
          <input type="text" placeholder="Day and Time" value={day} onChange={(e) => setDay(e.target.value)} />
        </div>
        <div className="form-control form-control-check">
          <label>Set Reminder</label>
          <input type="checkbox" checked={reminder} onChange={(e) => setReminder(e.target.checked)} />
        </div>
        <input className="btn btn-block" type="submit" value="Save Task" />
      </form>
      <Button className="btn btn-block" onClick={() => cancelExecuted()} color="red" text="Cancel" showButton={true} />
    </div>
  )
}

export default AddTask