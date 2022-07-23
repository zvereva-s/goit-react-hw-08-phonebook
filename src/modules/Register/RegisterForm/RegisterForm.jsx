
import useForm from 'shared/hooks/useForm';

import TextFields from 'shared/components/TextField';
import Button from 'shared/components/Button';

import { fields } from "./fields";
import { initialState } from './initialState';

function RegisterForm({ onSubmit }) {
    const { state, handleChange, handleSubmit } = useForm({onSubmit, initialState});

    const { name, email, password } = state;

    return (
        <form onSubmit={handleSubmit}>
            <TextFields value={name} handleChange={handleChange} {...fields.name} />
            <TextFields value={email} handleChange={handleChange} {...fields.email} />
            <TextFields value={password} handleChange={handleChange} {...fields.password} />
            <Button text='Register' type='submit'/>
        </form>
    )
}

export default RegisterForm;