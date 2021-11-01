import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h1>this is Profile</h1>
      {/* <button onClick={resUser}  >handel user </button> */}
      <h3>{user && user.data.first_name + ' ' + user.data.last_name}</h3>
    </div>
  );
};

export default Profile;
