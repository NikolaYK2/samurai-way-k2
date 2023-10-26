import React from 'react';
import {UsersType} from "common/api/api";
import {useAppSelector} from "app/model/redux-store";
import {optimizedFriendsFollowedSelector} from "features/2-main/content/3-friends/model/Friends.seceltors";

type FriendsType = {
  users: UsersType[],
}
export const Friends = (props: FriendsType) => {
  const friends = useAppSelector(optimizedFriendsFollowedSelector)

  if (!props.users.length) {
    return <div>Users not found</div>
  }

  return (
    <div>
      {friends.map(user => {
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

