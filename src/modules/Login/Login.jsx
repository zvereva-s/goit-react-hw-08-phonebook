import { useDispatch } from "react-redux";
import { loginRequest } from "redux/auth/auth-operations";
import LoginForm from "./LoginForm";

function Login() {
    const dispatch = useDispatch();

    function onLogin(data) {
        dispatch(loginRequest(data))
    }
    
    return (
    <>
    <LoginForm onSubmit={onLogin} />
    </>)

 }

export default Login;