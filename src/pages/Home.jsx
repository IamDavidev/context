import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Home</h1>
      <h3>
        {user &&
          'welcome context APP  ' +
            user.data.first_name +
            ' ' +
            user.data.last_name}
      </h3>
    </>
  );
};

export default Home;
