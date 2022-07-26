import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { memo } from 'react';

import PropTypes from 'prop-types';
import { removeContact } from '../../../redux/contacts/contacts-operations';
import { getRemoveLoading } from 'redux/contacts/contacts-selectors';

import ContactListItem from './ContactListItem/ContactListItem';


function ContactList({ items}) {
  const [selectedId, setSelectedId] = useState('');
  const removeLoading = useSelector(getRemoveLoading);
  const dispatch = useDispatch();
  
  const onRemoveContact = (id) => {
    setSelectedId(id);
    dispatch(removeContact(id));
    }


  const elements = items.map(({ id, name, number }) => (
    <ContactListItem key={id} name={name} number={number} onClick={() => onRemoveContact(id)} removeLoading={selectedId === id ? removeLoading : false} />
  ));
  return (

    <ul>{elements}</ul>);
}

ContactList.defaultProps = {
  contacts: [],
};
ContactList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default memo(ContactList);