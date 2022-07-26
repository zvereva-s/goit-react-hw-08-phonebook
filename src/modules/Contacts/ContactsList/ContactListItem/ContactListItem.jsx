import Button from 'shared/components/Button';
import styles from '../contactsList.module.css';

function ContactListItem({ name, number, onClick, removeLoading}) {
 

    return (
        <li className={styles.item}>
          {name}: <span className={styles.number}>{number}</span>
        <Button text='Delete' type='button' onClick={onClick} isLoading={removeLoading} />
        </li>
    )
}
export default ContactListItem;