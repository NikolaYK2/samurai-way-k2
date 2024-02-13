import {
  followAC,
  InitializationStateType,
  setUsersAC,
  unFollowAC,
  usersReducer
} from "features/2-main/content/4-users/model/usersReducers";

let users: InitializationStateType
beforeEach(() => {
  users = {
    users: [
      {
      id: '1',
      name: 'Nik',
      status: 'false',
      photos: {large: '', small: ''},
      followed: false,
    },
      {
      id: '2',
      name: 'Natali',
      status: 'false',
      photos: {large: '', small: ''},
      followed: false,
    },
    ],
    pageSize: 12,
    totalUsersCount: 0,
    currentPage: 1,
    loadingPage: true,
    expectation: [],
  }
})
test('users reducer. Success friends', () => {

  const newState = usersReducer(users, followAC('1'))

  expect(newState.users[0].followed).toBeTruthy()
  expect(newState.users[1].followed).toBeFalsy()
})

test('users reducer. remove friends', () => {

  const newState = usersReducer(users, unFollowAC('1'))

  expect(newState.users[0].followed).toBeFalsy()
  expect(newState.users[1].followed).toBeFalsy()
})

test('users reducer. Get users', () => {

  let defaultUsersArr: InitializationStateType = {
    users: [],
    pageSize: 12,
    totalUsersCount: 0,
    currentPage: 1,
    loadingPage: true,
    expectation: [],
  }

  const newUsersArr = users.users

  const newState = usersReducer(defaultUsersArr, setUsersAC(newUsersArr))

  expect(newState.users.length).toBe(2)
  expect(newState.users[0].id).toBe('1')
})