import React from 'react';

const UserProfile = ({user}) => {
    return (
      <div className="avatar">
        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
          <img src={user?.photoURL} />
        </div>
      </div>
    );
};

export default UserProfile;