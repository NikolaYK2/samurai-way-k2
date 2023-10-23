import React, {useEffect, useState} from 'react';
import s from './ErrorsApp.module.css'
import {useAppDispatch, useAppSelector} from "app/redux-store";
import {setErrorsAC} from "features/2-main/content/1-MyProfile/model/proFilePageReducer";
import {errorSelect} from "features/2-main/content/1-MyProfile/model/MyProfileSelectors";
import {IconSvg} from "common/components/iconSvg/IconSVG";

export const ErrorsApp = () => {
  const err = useAppSelector(errorSelect)
  const dispatch = useAppDispatch()

  const [styleErr, setStyleErr] = useState('')

  const deleteErrorHandle = () => {
    setStyleErr(s.off)
    dispatch(setErrorsAC(null))
  }


  useEffect(() => {
    if (err !== null) {
      setStyleErr(s.on)

      let id = window.setTimeout(() => {
        deleteErrorHandle()
      }, 5000)
      return () => {
        window.clearTimeout(id)
      }
    }
  }, [err]);

  return (
    <div className={`${s.containerError} ${styleErr}`}>
      <span>{err}</span>
      <div onClick={deleteErrorHandle}><IconSvg name={'delete'}/></div>
    </div>
  );
};
