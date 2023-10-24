import {createSelector} from "reselect";
import {AppStateType} from "app/model/redux-store";

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users;
}
//FN SELECTOR ----------
//Можно исп. несколько селекторов /getUsers, getPageSize, (3-users,pageSize)=>{}
export const getUserSelector = createSelector(getUsers,(users)=>{
    return users;
})

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize;
}
export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount;
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage;
}
export const getLoadingPage = (state: AppStateType) => {
    return state.usersPage.loadingPage;
}
export const getExpectation = (state: AppStateType) => {
    return state.usersPage.expectation;
}

