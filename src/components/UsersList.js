import React from 'react';
import UserInfo from './UserInfo';

const UsersList = ({users}) => {
    return (
        <div className="align">
        <div className="responsive-cards">
            {
                users?.map(user => (
                    //<div key={user}>
                    //    {user}
                    //</div>
                    <UserInfo userURL={user} key={user}/>
                ))
            }
        </div>
        </div>
    );
};

export default UsersList;