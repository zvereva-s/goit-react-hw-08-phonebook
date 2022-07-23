import PropTypes from 'prop-types';
import styles from './button.module.css';

function Button({ text, type, onClick }) {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {text}
    </button>
  );
}
export default Button;

Button.defaultProps = {
  onClick: ()=>{},
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
