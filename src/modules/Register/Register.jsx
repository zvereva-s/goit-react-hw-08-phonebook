import { useDispatch } from 'react-redux';
import { NotificationManager } from 'react-notifications';

import useAuthState from 'shared/hooks/useAuthState';
import { signupRequest } from '../../redux/auth/auth-operations';

import RegisterForm from './RegisterForm';
import Loader from 'shared/components/Loader';

function Register() {
  const dispatch = useDispatch();
  const { loading, error } = useAuthState();

  function onRegister(data) {
    dispatch(signupRequest(data));
  }
  return (
    <>
      {loading && <Loader />}
      {error && NotificationManager.error(`${error.message}`)}
      <RegisterForm onSubmit={onRegister} />
    </>
  );
}

export default Register;
