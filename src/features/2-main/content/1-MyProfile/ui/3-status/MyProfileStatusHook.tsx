import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import s from 'features/2-main/content/1-MyProfile/ui/3-status/MyProfileStatus.module.css'
import {useAppDispatch, useAppSelector} from "app/model/redux-store";
import {updStatusThunkCreator} from "features/2-main/content/1-MyProfile/model/proFilePageReducer";
import {statusSelector} from "features/2-main/content/1-MyProfile/model/MyProfileSelectors";
import {getUserOptimized} from "features/2-main/content/4-users/model/usersSelectors";

export const MyProfileStatusHook = () => {
  const status = useAppSelector(statusSelector)
  const userId = useAppSelector(state => state.proFilePage.profile?.userId)
  const myId = useAppSelector(state => state.loginAuthorization.id)
  const statusUser = useAppSelector((state) => getUserOptimized(state, userId))
  const dispatch = useAppDispatch();
  const [editMode, setEditMode] = useState(true);
  const [statusLocal, setStatusLocal] = useState(status);

  const activateEditMode = () => {
    if (userId === myId) setEditMode(false)
  }
  const deactivateEditMode = () => {
    setEditMode(true)
    dispatch(updStatusThunkCreator(statusLocal))
  }

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatusLocal(e.currentTarget.value)
  }

  const downEnterHandle = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      deactivateEditMode()
    }
  }

  //При монтировании компоненты сетаем новые данные и подписываемся на обновления
  useEffect(() => {
    setStatusLocal(status)
  }, [status]);


  return (
    <div className={s.blockStatus}>
      {editMode ?
        <span onDoubleClick={activateEditMode} className={s.span}>
                    {userId === myId ? status || 'no status' : statusUser?.status}
                </span>
        :
        <input autoFocus={true}
               onBlur={deactivateEditMode}
               onChange={onStatusChange}
               onKeyDown={downEnterHandle}
               value={statusLocal}
               placeholder={'status'}
        ></input>
      }
    </div>
  )
}

