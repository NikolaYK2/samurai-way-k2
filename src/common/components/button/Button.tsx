import React from 'react';
import s from "./Button.module.css";

export const Button = (props:{name:string, change:boolean,modClass?:string}) => {
  return (
      <button disabled={props.change} className={`${s.button} ${props.modClass}`}>{props.name}</button>
  );
};

