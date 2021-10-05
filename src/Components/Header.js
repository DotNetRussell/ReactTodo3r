import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, addTask, showAddTask }) =>
{
  return (
    <header className='header'>
      <h1>Task Tracker: {title}</h1>
      <Button onClick={addTask} color="green" text="Add" showButton={!showAddTask} />
    </header>);
}

Header.defaultProps = {
  title: 'This is a default title'
}
 
Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header