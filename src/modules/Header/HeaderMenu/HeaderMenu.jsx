import { NavLink } from 'react-router-dom';

import { items } from './items';
import styles from './headerMenu.module.css';
 
function getLinkClassname({ isActive }) {
    return isActive ? styles.isActive : styles.link;
}

function HeaderMenu() {
    
    const elements = items.map(({ id, link, text }) =>
        <li key={id} className={styles.item}>
            <NavLink className={getLinkClassname} to={link}>{text}</NavLink>
        </li>)
    
    return (
        <ul className={styles.list}>
        {elements}
        </ul>)
}
export default HeaderMenu;