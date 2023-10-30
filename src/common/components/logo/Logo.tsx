import React from 'react';
import {MemoNavLink} from "common/utills/MemoNavLink";
import s from './Logo.module.css'
import logo from 'assets/img/logo/logo.png'

export const Logo = () => {
  return (
    <div className={s.log}>
      <MemoNavLink to={'/profile'}><img src={logo} alt=""/></MemoNavLink>
    </div>
  );
};

