import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import s from './FindName.module.css'
import {useDebounce} from "common/hooks/useDebounce";
import {useAppDispatch, useAppSelector} from "app/model/redux-store";
import {getUsersThunkCreator} from "features/2-main/content/4-users/model/usersReducers";
import {getCurrentPageSelect, getPageSizeSelect} from "features/2-main/content/4-users/model/usersSelectors";
import {IconSvg} from "common/components/iconSvg/IconSVG";

export const FindName = () => {
  const pageSize = useAppSelector(getPageSizeSelect)
  const currentPage = useAppSelector(getCurrentPageSelect)

  const dispatch = useAppDispatch()
  const [text, setText] = useState('');
  console.log(text)

  const debouncedValue = useDebounce(text, 1000)

  const findHandle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  }, [])

  useEffect(() => {
    if (text) {
      if (debouncedValue) {
        dispatch(getUsersThunkCreator(1, 12, text))
      }
    } else {
      dispatch(getUsersThunkCreator(currentPage, pageSize))
    }
  }, [debouncedValue]);

  return (
    <div className={s.container}>
      <input type="text" name="find" placeholder={'Source...'} onChange={findHandle}/>
      <IconSvg name={'find'}/>
    </div>
  );
};
