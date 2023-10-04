import React from 'react';
import s from "./Button.module.css";

export const Button = (props:{name:string, change:boolean}) => {
  return (
    <div className={s.button}>
      <button disabled={props.change}>{props.name}</button>
    </div>
  );
};

