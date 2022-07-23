import { NotificationManager } from "react-notifications";
import { postContact, deleteContact, fetchContactsList } from '../../shared/services/API/contacts';
import { createOperation } from "shared/services/utils/utils";

export const fetchContacts = createOperation('contacts/fetch', fetchContactsList);
export const removeContact = createOperation('contact/remove', deleteContact);
export const addContact = createOperation('contact/add', postContact, (contact, { getState }) => {
    const { contacts } = getState();
    const { items } = contacts;
    const copy = items.find(el => el.name === contact.name);
    if (copy) {
        NotificationManager.error(`${contact.name} you have already in your contacts`);
        return false;
    }
});

