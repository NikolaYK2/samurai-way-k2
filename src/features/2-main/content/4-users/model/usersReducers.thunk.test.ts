import {
  followThunkCreator,
  toggleExpectationAC,
  unFollowThunkCreator
} from "features/2-main/content/4-users/model/usersReducers";
import {usersAPI} from "features/2-main/content/4-users/api/usersApi";
import {ResponsType} from "common/api/api";

jest.mock('features/2-main/content/4-users/api/usersApi')
const userApiMock = usersAPI as jest.Mocked<typeof  usersAPI>

const dispatchMock = jest.fn()

beforeEach(()=>{
   dispatchMock.mockClear()
   userApiMock.postFollow.mockClear()
   userApiMock.deleteFollow.mockClear()
})

const res: ResponsType = {
  resultCode: 0,
  messages: [],
  data: {}
}

userApiMock.postFollow.mockReturnValue(Promise.resolve(res))
userApiMock.deleteFollow.mockReturnValue(Promise.resolve(res))

test('user reducer thunk. follow user', async () => {

  const thunk = followThunkCreator('1');

  await thunk(dispatchMock);

  expect(dispatchMock).toBeCalledTimes(2)
  expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleExpectationAC('1', true))
  expect(dispatchMock).toHaveBeenNthCalledWith(2, toggleExpectationAC('1', false))
})

test('user reducer thunk. unfollow user', async () => {

  const thunk = unFollowThunkCreator('1');


  await thunk(dispatchMock);

  expect(dispatchMock).toBeCalledTimes(2)
  expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleExpectationAC('1', true))
  expect(dispatchMock).toHaveBeenNthCalledWith(2, toggleExpectationAC('1', false))
})