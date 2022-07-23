import { useSelector, useDispatch } from "react-redux";
import { auth } from "redux/auth/auth-selectors";
import { logoutRequest } from "redux/auth/auth-operations";

import Button from "shared/components/Button";
import styles from './userMenu.module.css';

function UserMenu() {
    const authState = useSelector(auth);
    const { user } = authState;
    
   
    const dispatch = useDispatch();

    function onLogout() {
        dispatch(logoutRequest());
    }
    
    const classEmail = `${styles.item} ${styles.email}`;
    return (
        <div className={styles.logout}> 
            <p className={classEmail}>{user.email}</p>
            <Button text='Logout' type='button' onClick={onLogout} />
        </div>
    )
 };
export default UserMenu;