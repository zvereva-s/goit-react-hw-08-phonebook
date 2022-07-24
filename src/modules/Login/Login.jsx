import { useDispatch } from 'react-redux';

import useAuthState from 'shared/hooks/useAuthState';
import { loginRequest } from 'redux/auth/auth-operations';

import LoginForm from './LoginForm';
import Loader from 'shared/components/Loader';

function Login() {
  const dispatch = useDispatch();
  const { loading} = useAuthState();


  function onLogin(data) {
    dispatch(loginRequest(data));
  }

  return (
    <>
      {loading && <Loader />}
      <LoginForm onSubmit={onLogin} />
    </>
  );
}

export default Login;
