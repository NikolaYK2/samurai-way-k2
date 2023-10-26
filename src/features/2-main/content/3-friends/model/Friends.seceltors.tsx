import {AppStateType} from "app/model/redux-store";
import {createSelector} from "reselect";

const friends = (state: AppStateType) => state.friends.users

export const optimizedFriendsSelector = createSelector([friends], (friends) => {
  return friends

})

export const optimizedFriendsFollowedSelector = createSelector([friends], (friends) => {
  return friends.filter(people => people.followed)
})