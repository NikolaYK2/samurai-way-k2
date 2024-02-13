import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import s from './FindName.module.css'
import {useDebounce} from "common/hooks/useDebounce";
import {useAppDispatch, useAppSelector} from "app/model/redux-store";
import {ActionUsersType} from "features/2-main/content/4-users/model/usersReducers";
import {getCurrentPageSelect, getPageSizeSelect} from "features/2-main/content/4-users/model/usersSelectors";
import {IconSvg} from "common/components/iconSvg/IconSVG";
import {Dispatch} from "redux";

type Props = {
  callbackFriends?: (page: number,
                     pageSize: number,
                     friend?: boolean,
                     loaderStyle?: string,
                     loader?: any,
                     term?: string) => (dispatch: Dispatch<ActionUsersType>) => Promise<void>
  callbackUsers?: (page: number,
                   pageSize: number,
                   term?: string | undefined) => (dispatch: Dispatch<ActionUsersType>) => Promise<void>
}
export const FindName = (props: Props) => {

  const pageSize = useAppSelector(getPageSizeSelect)
  const currentPage = useAppSelector(getCurrentPageSelect)

  const dispatch = useAppDispatch()
  const [text, setText] = useState('');

  const debouncedValue = useDebounce(text, 1000)

  const findHandle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  }, [])

  useEffect(() => {
    if (text) {
      if (debouncedValue) {
        if (props.callbackUsers) dispatch(props.callbackUsers(1, 12, text))
        if (props.callbackFriends) dispatch(props.callbackFriends(1, 12, true, '', '', text))
      }
    } else {
      if (props.callbackUsers) dispatch(props.callbackUsers(currentPage, pageSize, text))
      if (props.callbackFriends) dispatch(props.callbackFriends(currentPage, pageSize, true, '', '', text))

      // dispatch(getUsersThunkCreator(currentPage, pageSize))
    }
  }, [debouncedValue]);

  return (
    <div className={s.container}>
      <input type="text" name="find" placeholder={'Source...'} onChange={findHandle}/>
      <IconSvg name={'find'}/>
    </div>
  );
};
