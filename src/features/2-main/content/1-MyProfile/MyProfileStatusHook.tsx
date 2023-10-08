import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './MyProfileStatus.module.css'
import {useAppDispatch, useAppSelector} from "app/redux-store";
import {updStatusThunkCreator} from "features/redux/proFilePageReducer";
import {statusSelector} from "features/2-main/content/1-MyProfile/MyProfileSelectors";

export const MyProfileStatusHook = () => {
    console.log('status')
    const status = useAppSelector(statusSelector)
    const dispatch = useAppDispatch();

    const [editMode, setEditMode] = useState(true);
    const [statusLocal, setStatusLocal] = useState(status);

    const activateEditMode = () => {
        setEditMode(false)
    }
    const deactivateEditMode = () => {
        setEditMode(true)
        dispatch(updStatusThunkCreator(statusLocal))
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatusLocal(e.currentTarget.value)
    }

    //При монтировании компоненты сетаем новые данные и подписываемся на обновления
    useEffect(() => {
        setStatusLocal(status)
    }, [status]);

    return (
        <div className={s.blockStatus}>
            {editMode ?
                <span onDoubleClick={activateEditMode} className={s.span}>{status || 'no status'}</span>
                :
                <input autoFocus={true}
                       onBlur={deactivateEditMode}
                       onChange={onStatusChange}
                       value={statusLocal}
                       placeholder={'status'}
                ></input>
            }
        </div>
    )
}
