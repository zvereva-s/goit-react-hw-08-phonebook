export const fields = {
    name: {
        label: "Name",
        name: "name",
        placeholder: "Type your full name",
        required: true,
        type: "text",
        pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
        title: "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    },
    email: {
        label: "Email",
        name: "email",
        placeholder: "Type your email",
        required: true,
        type: "email",
    },
    password: {
        label: 'Password',
        name: 'password',
        placeholder: "Type your password",
        required: true,
        type: "password",
    }
}