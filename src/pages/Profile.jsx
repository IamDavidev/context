import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h1>this is Profile</h1>
    {
      user ? (
        <div>
          <h2>{user.name}</h2>
          <h2>{user.email}</h2>
          <button onClick={() => setUser(null)}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please Login</h2>
        </div>
      )
    }
    </div>
  );
};

export default Profile;
