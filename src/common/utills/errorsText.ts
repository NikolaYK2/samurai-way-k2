import axios from "axios";
import {AppDispatch} from "app/model/redux-store";
import {setErrorsAC} from "features/2-main/content/1-MyProfile/model/proFilePageReducer";
import {ResponsType} from "common/api/api";

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

export const handleServerAppError = <D>(
  data: ResponsType<D>,
  dispatch: AppDispatch,
  showError: boolean = true //Делаем по умолчанию true
) => {
  // export const handleServerAppError = <D>(data: ResponsTodolistsType<D>, dispatch: Dispatch<SetAppErrorACType | SetAppStatusACType>) => {
  if  (showError){
    if (data.messages.length) {
      dispatch(setErrorsAC(data.messages[0]));
    } else {
      dispatch(setErrorsAC("Some error occurred"));
      // dispatch(setAppErrorAC('Some error occurred'))
    }
    // dispatch(setAppStatusAC('failed'));
  }
  // dispatch(appAction.setStatus({ status: "failed" }));
};
