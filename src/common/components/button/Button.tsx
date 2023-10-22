import React from 'react';
import s from "./Button.module.css";


type ButtonType = {
  name: string,
  modClass?: string,
  disabled: boolean,
  callBack?: () => void
}
export const Button = (props: ButtonType) => {

  const callbackHandle = () => {
    props.callBack?.()
  }
  return (
    <button disabled={props.disabled}
            className={`${s.button} ${props.modClass} ${props.disabled ? s.disabled : ''}`}
            onClick={callbackHandle}
    >
      {props.name}
    </button>
  );
};

