import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
// import { History } from '../Routes/History';
const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className='profile'>
      {user ? (
        <div className="profile__container">
          <div className="profile__container__image">
            <img
              src={user.data.avatar}
              className="profile__img"
              alt={user.data.first_name}
            />
          </div>
          <div className="profile__info">
          <p>
            Name : <strong>{user.data.first_name} </strong>{' '}
          </p>
          <p>
          last Name : <strong>{user.data.last_name} </strong>{' '}
          </p>
          <p>
            Email : <strong>{user.data.email} </strong>{' '}
          </p>
          <p>
            description : <strong>{user.support.text} </strong>{' '}
          </p>
          <a href={user.support.url} target="_blank">LINK</a>
          {/* <button onClick={handleOut}>Logout</button> */}
          </div>
        </div>
      ) : (
        <div>
          <h2>Please Login</h2>
        </div>
      )}
    </div>
  );
};

export default Profile;
