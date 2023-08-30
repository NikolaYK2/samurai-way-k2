import React from 'react';
import {UsersType} from "common/api/api";

type FriendsType={
    users: UsersType[],
}
export const Friends = (props: FriendsType) => {
    if (!props.users.length) {
        return <div>Users not found</div>
    }

    return (
        <div>
            {props.users.map(user => {
                return (
                    <div key={user.id}>
                        <img src={!user.photos.small ? 'https://via.placeholder.com/100' : user.photos.small} alt=""/>
                        <span>{user.name}</span>
                        <div>{user.status ? user.status : 'no status'}</div>
                    </div>
                );
            })}
        </div>
    );
};

