import { useDispatch } from 'react-redux';
import { NotificationManager } from 'react-notifications';

import useAuthState from 'shared/hooks/useAuthState';
import { loginRequest } from 'redux/auth/auth-operations';

import LoginForm from './LoginForm';
import Loader from 'shared/components/Loader';

function Login() {
  const dispatch = useDispatch();
  const { loading, error } = useAuthState();


  function onLogin(data) {
    dispatch(loginRequest(data));
  }

  return (
    <>
      {loading && <Loader />}
      {error && NotificationManager.error(`${error.message}`)}
      <LoginForm onSubmit={onLogin} />
    </>
  );
}

export default Login;
