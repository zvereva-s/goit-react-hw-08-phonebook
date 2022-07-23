export const fields = {
    name: {
        label: "Name",
        name: "name",
        placeholder: "Type contact full name",
        required: true,
        type: "text",
        pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
        title: "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    },
    phone: {
        label: "Phone",
        name: "number",
        placeholder: "Type contact phone",
        required: true,
        type: "tel",
        // eslint-disable-next-line no-useless-escape
        // pattern: "\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}",
        title: "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",
    }
}