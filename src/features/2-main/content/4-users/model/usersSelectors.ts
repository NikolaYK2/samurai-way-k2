import {createSelector} from "reselect";
import {AppStateType} from "app/model/redux-store";

const getUsers = (state: AppStateType) => state.usersPage.users;
export const usersSelectOptimized = createSelector(getUsers, (users) => {
  return users;
})


//FN SELECTOR ----------
//Можно исп. несколько селекторов /getUsers, getPageSize, (4-users,pageSize)=>{}
export const getUsersSelector = createSelector(getUsers, (users) => {
  return users.filter(el=>el.followed);
})

export const getUserOptimized = createSelector(getUsers,
  (_: AppStateType, userId: number | undefined) => userId,
  (users, userId) => users.find(user => userId && +user.id === userId))

export const followedUserSelector = createSelector(getUsers,
  (_: AppStateType, userId: number | undefined) => userId,
  (users, userId) => users.find(user => +user.id === userId ))




export const getPageSizeSelect = (state: AppStateType) => state.usersPage.pageSize;

export const getTotalUsersCountSelect = (state: AppStateType) => state.usersPage.totalUsersCount;

export const getCurrentPageSelect = (state: AppStateType) => state.usersPage.currentPage;

export const getLoadingPageSelect = (state: AppStateType) => state.usersPage.loadingPage;

export const getExpectationSelect = (state: AppStateType) => state.usersPage.expectation;


