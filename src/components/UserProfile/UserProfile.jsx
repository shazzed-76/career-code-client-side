import React from 'react';

const UserProfile = ({user}) => {
    console.log(user.photoURL)
    return (
      <div className="avatar">
        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
          <img className='object-cover w-full h-full' src={user?.photoURL} alt='profile' />
        </div>
      </div>
    );
};

export default UserProfile;