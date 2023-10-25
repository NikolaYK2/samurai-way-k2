import {createSelector} from "reselect";
import {AppStateType} from "app/model/redux-store";

const getUsers = (state: AppStateType) => state.usersPage.users;

//FN SELECTOR ----------
//Можно исп. несколько селекторов /getUsers, getPageSize, (3-users,pageSize)=>{}
export const getUsersSelector = createSelector(getUsers, (users) => {
  return users;
})

export const getUserOptimized = createSelector(getUsers,
  (_: AppStateType, userId: number | undefined) => userId,
  (users, userId) => users.find(user => userId && +user.id === userId))

export const getPageSize = (state: AppStateType) => state.usersPage.pageSize;

export const getTotalUsersCount = (state: AppStateType) => state.usersPage.totalUsersCount;

export const getCurrentPage = (state: AppStateType) => state.usersPage.currentPage;

export const getLoadingPage = (state: AppStateType) => state.usersPage.loadingPage;

export const getExpectation = (state: AppStateType) => state.usersPage.expectation;


