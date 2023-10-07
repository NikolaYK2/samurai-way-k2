import React from "react";
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import {IconSvg} from "common/components/iconSvg/IconSVG";
import {BcAvatarProfile} from "common/components/bcAvatarProfile/BcAvatarProfile";

export const Nav = () => {
  const links = [
    {name: 'Profile', link: '/profile', icon:'loginIn'},
    {name: 'Messages', link: '/messages', icon:'message'},
    {name: 'Users', link: '/users', icon:'users'},
    {name: 'News', link: '/news', icon:'news'},
    {name: 'Music', link: '/music', icon:'music'},
    {name: 'Settings', link: '/settings', icon:'setting'},
    {name: 'Friends', link: '/friends', icon:'users'},
  ]

  return (
    <aside className={s.container}>
      <nav className={s.nav}>
        <div className={s.s}><BcAvatarProfile onOffAvatar={true}/></div>
        <ul>
          {links.map(el => <li key={el.name}>
            <NavLink to={el.link}  className={({isActive}) => isActive ? s.activeLink : ''}>{el.name}</NavLink>
            <div className={s.svg}><IconSvg name={el.icon}/></div>
          </li>)}
        </ul>
      </nav>
    </aside>
  );
}
