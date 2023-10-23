import axios from "axios";
import {AppDispatch} from "app/redux-store";
import {setErrorsAC} from "features/2-main/content/1-MyProfile/model/proFilePageReducer";

export const requiredTextInputs = 'Fill in the field'
export const profileInfoTextInputs = /^((http|https):\/\/)?(www.)?(facebook|twitter|instagram|vk|github|youtube)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$|^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/

export const handleServerNetworkError = (error: unknown, dispatch: AppDispatch): void => {
  let errorMessage = "Some error occurred";

  // ❗Проверка на наличие axios ошибки
  if (axios.isAxiosError(error)) {
    errorMessage = error.response?.data?.message || error?.message || errorMessage;
    // ❗ Проверка на наличие нативной ошибки
  } else if (error instanceof Error) {
    errorMessage = `Native error: ${error.message}`;
    // ❗Какой-то непонятный кейс
  } else {
    errorMessage = JSON.stringify(error);
  }
  dispatch(setErrorsAC(errorMessage));
};
