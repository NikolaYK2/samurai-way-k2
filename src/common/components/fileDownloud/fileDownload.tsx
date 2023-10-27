import React, {ChangeEvent} from 'react';
import {IconSvg} from "common/components/iconSvg/IconSVG";
import s from './fileDownload.module.css'
import {changeBackgroundAC, changePhotoTC} from "features/2-main/content/1-MyProfile/model/proFilePageReducer";
import {useAppDispatch} from "app/model/redux-store";

type Props = {
  name: string,
}
export const FileDownload = (props: Props) => {
  const dispatch = useAppDispatch();

  const FileDownloadHandle = (e: ChangeEvent<HTMLInputElement>) => {

    if (e.currentTarget.files && e.currentTarget.files.length > 0) {

      if (props.name === 'changeAva') {

        dispatch(changePhotoTC(e.currentTarget.files[0]))

      } else {
        const reader = new FileReader()
        reader.onloadend = () => {
          dispatch(changeBackgroundAC(String(reader.result)))
        }
        reader.readAsDataURL(e.currentTarget.files[0])

      }

    }
  }
  // const changeBackgroundUserHandle = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.currentTarget.files && e.currentTarget.files.length > 0) {
  //     const file = e.currentTarget.files[0]
  //     const reader = new FileReader()
  //     reader.onloadend = ()=>{
  //       dispatch(changeBackgroundAC(String(reader.result)))
  //     }
  //     reader.readAsDataURL(file)
  //   }
  // }


  return (
    <div className={s.blockImg}>
      <label className={s.changeAva}><IconSvg name={props.name}/>
        <input type="file" onChange={FileDownloadHandle}/>
      </label>

    </div>
  );
};

