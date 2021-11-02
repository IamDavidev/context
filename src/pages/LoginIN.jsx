import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import fetchUser from '../helpers/fetchUser';
const LoginIn = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogin = () => {
    setUser(fetchUser);
  };
  const handleInLogin = () => {
    setUser(null);
  };

  return (
    <div>
      <h1>Login</h1>
      {user ? (
        <div>
          <h2>{user.data.first_name + '  ' + user.data.last_name}</h2>
          <button onClick={handleInLogin}> LOGOUT </button>
        </div>
      ) : (
        <button onClick={handleLogin}> LOGIN </button>
      )}
    </div>
  );
};
export default LoginIn;
