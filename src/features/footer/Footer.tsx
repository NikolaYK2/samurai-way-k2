import React from "react";
import s from "./Footer.module.css";
import {Logo} from "common/components/logo/Logo";
import {IconSvg} from "common/components/iconSvg/IconSVG";

export const Footer = () => {
  return (
    <footer className={s.foot}>
      <div className={s.container}>
        <Logo/>
        <div className={s.blockContacts}>
          <ul>
            <li><a href="https://github.com/NikolaYK2"><IconSvg name={'github'}/></a></li>
            <li><a href="https://www.linkedin.com/feed/"><IconSvg name={'linkedin'}/></a></li>
            <li><a href="'https://t.me/Nik_Kev'"><IconSvg name={'telegram'}/></a></li>
          </ul>
        </div>
        <span>© 2023. All rights reserved</span>
      </div>
    </footer>
  );
}