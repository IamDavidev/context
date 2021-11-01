// import { resUser } from '../helpers/fetchUser';
import { user } from '../helpers/fetchUser';
const Profile = () => {
  // console.log(user);
  const { id, email, first_name, last_name, avatar } = user.data;
  console.log(id);
  return (
    <div>
      <h1>this is Profile</h1>
      {/* <button onClick={resUser}  >handel user </button> */}
    <p>{id}</p>
      <strong>{email}</strong>
    </div>
  );
};

export default Profile;
