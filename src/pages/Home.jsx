import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { fetchUser } from '../helpers/fetchUser';

const Home = () => {
  // console.log('home');
  const { user, setUser } = useContext(UserContext);
  const handleUser = () => {
    setUser(fetchUser)
  }
  return (
    <>
      <h1>Home</h1>
      <h3>{user && user.data.first_name + ' ' + user.data.last_name}</h3>
      <button onClick={handleUser}>Login</button>
    </>
  );
};

export default Home;
