import useForm from "shared/hooks/useForm";

import TextFields from "shared/components/TextField";
import Button from "shared/components/Button";

import { fields } from "./fields";
import { initialState } from "./initialState";

function LoginForm({ onSubmit }) {
    const { state, handleChange, handleSubmit } = useForm({onSubmit, initialState});

    const { email, password } = state;

    return (
        <form onSubmit={handleSubmit}>
            <TextFields value={email} handleChange={handleChange} {...fields.email} />
            <TextFields value={password} handleChange={handleChange} {...fields.password} />
            <Button text='Login' type='submit' />
        </form>
    )

 };

export default LoginForm;