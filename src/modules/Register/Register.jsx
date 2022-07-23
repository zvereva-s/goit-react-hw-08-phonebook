import { useDispatch } from 'react-redux';
import { signupRequest } from '../../redux/auth/auth-operations';
import RegisterForm from "./RegisterForm";

function Register() {
    const dispatch = useDispatch();
    
    function onRegister(data) {
        dispatch(signupRequest(data))
     }
    return (
    <>
    <RegisterForm onSubmit={onRegister} />
    </>)
}

export default Register;