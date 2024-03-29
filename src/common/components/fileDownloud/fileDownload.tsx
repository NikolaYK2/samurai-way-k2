import React, {ChangeEvent} from 'react';
import {IconSvg} from "common/components/iconSvg/IconSVG";
import s from './fileDownload.module.css'
import {ActionsTypeProfile} from "features/2-main/content/1-MyProfile/model/proFilePageReducer";
import {useAppDispatch} from "app/model/redux-store";
import {Dispatch} from "redux";

type Props = {
  name: string,
  register?: any
  callbackFile?: (file: File) => (dispatch: Dispatch<ActionsTypeProfile>) => Promise<void>;
  callbackAction?: (bc: string) => ActionsTypeProfile;
  callback?: (bc: string) => void;
}
export const FileDownload = (props: Props) => {

  const dispatch = useAppDispatch();


  const FileDownloadHandle = (e: ChangeEvent<HTMLInputElement>) => {

    if (e.currentTarget.files && e.currentTarget.files.length > 0) {

      if (props.name === 'changeAva') {

        props.callbackFile && dispatch(props.callbackFile(e.currentTarget.files[0]))

      } else {
        const reader = new FileReader()
        reader.onloadend = () => {
          if(props.callbackAction) dispatch(props.callbackAction(String(reader.result)))
          if(props.callback) props.callback(String(reader.result))
        }
        reader.readAsDataURL(e.currentTarget.files[0])
      }
    }
  }

  return (
    <label className={s.changeAva}><IconSvg name={props.name}/>
          <input type="file" onChange={FileDownloadHandle}/>
    </label>
  );
};

