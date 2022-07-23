import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts} from 'redux/contacts/contacts-selectors';
import {fetchContacts,addContact, removeContact } from 'redux/contacts/contacts-operations';

import Filter from 'shared/components/Filter';
import ContactsList from './ContactsList';
import ContactForm from 'shared/components/ContactForm';
import Loader from '../../shared/components/Loader';

import styles from './contacts.module.css';

function Contacts() {
  const [filter, setFilter] = useState('');
  const contacts = useSelector(getContacts);
  const {items, loading, error } = contacts;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])


    const onAddContact = (data)=> {
        dispatch(addContact(data));
    }
  
    const onRemoveContact = (id) => {
        dispatch(removeContact(id));
    }
  const onFilter = (e)=>{
      const { value } = e.target;
      setFilter(value);
    }
    const getFilteredItems = () => {
    if (!filter) {
      return items;
    }
    return items.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()));
    }

    const filteredItems = getFilteredItems();

  return (
    <div className={styles.wrapper}>
      <div>
        <h2 className={styles.title}>Phonebook</h2>
        <ContactForm onSubmit={onAddContact} />
      </div>
      <div className={styles.contactsList}>
        <h2 className={styles.title}>Contacts</h2>
        <Filter filter={onFilter} />
        {loading && <Loader />}
        {error && <p>{error.message}</p>}
        <ContactsList items={filteredItems} onClick={onRemoveContact} />
      </div>
    </div>
  );
}
export default Contacts;
