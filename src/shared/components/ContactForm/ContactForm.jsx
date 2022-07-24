import useForm from "shared/hooks/useForm";
import PropTypes from 'prop-types';

import { initialState } from "./initialState";
import { fields } from "./fields";

import TextFields from "../TextField";
import Button from "../Button";

function ContactForm({onSubmit}) {
    const { state, handleChange, handleSubmit } = useForm({onSubmit, initialState});

    const { name, number } = state;

    return (
        <form onSubmit={handleSubmit}>
            <TextFields value={name} handleChange={handleChange} {...fields.name} />
            <TextFields value={number} handleChange={handleChange} {...fields.phone} />
            <Button text='Add contact' type="submit" />
        </form>
    )
};
export default ContactForm;

ContactForm.defaultProps = {
    onSubmit: ()=>{},
}
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}