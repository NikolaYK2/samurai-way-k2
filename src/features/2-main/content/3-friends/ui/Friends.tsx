import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "app/model/redux-store";
import s from './Friends.module.css'
import {Paginator} from "common/components/paginator/Paginator";
import {
  getCurrentPageSelect,
  getPageSizeSelect,
  getTotalUsersCountSelect,
  getUsersSelector
} from "features/2-main/content/4-users/model/usersSelectors";
import {
  addFriendsThunkCreator,
  pageChangeFriendThunkCreator,
  unFollowThunkCreator
} from "features/2-main/content/4-users/model/usersReducers";
import {NavLink} from "react-router-dom";
import {Button} from "common/components/button/Button";

export const Friends = () => {

  const friends = useAppSelector(getUsersSelector)
  const totalItemsCount = useAppSelector(getTotalUsersCountSelect)
  const pageSize = useAppSelector(getPageSizeSelect)
  const currentPage = useAppSelector(getCurrentPageSelect)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(addFriendsThunkCreator(currentPage, pageSize, true,))
  }, []);


  // if (!friends.length) {
  //   return <div>Users not found</div>
  // }


  return (
    <div className={s.container}>
      <div className={s.blockFriends}>
        <Paginator totalItemsCount={totalItemsCount} pageSize={pageSize} currentPage={currentPage}
                   pageChangeThunkCreator={pageChangeFriendThunkCreator}/>
        <div className={s.friends}>
          {friends.map(user => {
            return (
              <div key={user.id} className={s.friend}>
                <div className={s.avatar}>
                  <NavLink to={`/profile/${user.id}`}>
                    <img src={!user.photos.small ? 'https://via.placeholder.com/100' : user.photos.small} alt=""/>
                  </NavLink>

                </div>
                <h3>{user.name}</h3>
                <span>{user.status ? user.status : 'no status'}</span>
                <div>
                  <Button name={'Unfriend'} disabled={false} callBack={() => dispatch(unFollowThunkCreator(user.id))}/>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={s.blockSubscribers}>
        <h3>Subscribers</h3>
      </div>
    </div>
  );
};

