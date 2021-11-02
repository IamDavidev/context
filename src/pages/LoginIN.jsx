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
      {
        user ? (
          <div>
            <h1>{user.name}</h1>
            <button onClick={handleInLogin}> LOGOUT </button>
          </div>
        ) : (
          <p>out</p>
        )
      }
      <button onClick={handleLogin}> LOGIN </button>
    </div>
  );
};
export default LoginIn;
