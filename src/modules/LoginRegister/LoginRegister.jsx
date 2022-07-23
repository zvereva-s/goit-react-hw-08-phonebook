import { NavLink } from 'react-router-dom';
import styles from './loginRegister.module.css';

function getLinkClassname({ isActive }) {
    return isActive ? styles.isActive : styles.link;
}
function LoginRegister() {
    return (
        <div className={styles.wrapper}>
          <p className={styles.item}>
            <NavLink className={getLinkClassname} to="/login">
              Login
            </NavLink>
        </p>
        <p className={styles.slash}>|</p>
          <p className={styles.item}>
            <NavLink className={getLinkClassname} to="/register">
              Register
            </NavLink>
          </p>
        </div>
    )
};
export default LoginRegister;