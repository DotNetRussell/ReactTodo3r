import PropTypes from 'prop-types'

const Button = ({ color, text, onClick, showButton }) =>
{
  return (
    <button
      className="btn"
      onClick={onClick}
      style={{ backgroundColor: color, display: !showButton ? "none" : ""  }}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  color: 'steelblue'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}


export default Button