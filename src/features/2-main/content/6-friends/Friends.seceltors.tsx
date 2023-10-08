import {AppStateType} from "app/redux-store";
import {createSelector} from "reselect";

const friends = (state: AppStateType) => state.friends.users

export const optimizedFriendsSelector = createSelector([friends], (friends) => {
  return friends.filter(people => people.followed)
})