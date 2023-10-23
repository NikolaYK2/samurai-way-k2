import {Dispatch} from "redux";
import {securityApi} from "features/0-security/api/securityApi";

const getCaptcha = 'SECURITY/GET-CAPTCHA'

export type ActionsTypeSecurity = ReturnType<typeof getCaptchaUrlAC>

const getCaptchaUrlAC = (imageCaptcha: string) => {
  return {
    type: getCaptcha,
    imageCaptcha
  } as const
}

type Props = {
  url: string
}
const init: Props = {
  url: ''
}
export const securityReducer = (state = init, action: ActionsTypeSecurity): Props => {
  switch (action.type) {
    case getCaptcha: {
      return {...state, url: action.imageCaptcha}
    }
    default:
      return state;
  }
};

export const getCaptchaUrlThunkCreator = () => async (dispatch: Dispatch<ActionsTypeSecurity>) => {
  // dispatch(loadingAC(true))
  try {
    let res = await securityApi.security()
    dispatch(getCaptchaUrlAC(res.data.url));
  } catch (e) {
    alert('Error get 3-users')
  } finally {
    // dispatch(loadingAC(false))
  }
}

