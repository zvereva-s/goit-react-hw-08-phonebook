import { useDispatch } from 'react-redux';


import useAuthState from 'shared/hooks/useAuthState';
import { signupRequest } from '../../redux/auth/auth-operations';


import RegisterForm from './RegisterForm';
import Loader from 'shared/components/Loader';


function Register() {

  const dispatch = useDispatch();
  let { loading, error} = useAuthState();
  

  function onRegister(data) {
    dispatch(signupRequest(data));
  }
  
  console.log('error register', error)

  return (
    <>
      {loading && <Loader />}
      <RegisterForm onSubmit={onRegister} />
      {/* {error && <p>{error.message}</p>} */}
    </>
  );
}

export default Register;
