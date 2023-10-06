import React from "react";
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import {AvatarUser} from "common/components/avatarUser/AvatarUser";
import {IconSvg} from "common/components/iconSvg/IconSVG";

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
        <div className={s.s}><AvatarUser/></div>
        <ul>
          {links.map(el => <li>
            <NavLink to={el.link} className={({isActive}) => isActive ? s.activeLink : ''}>{el.name}</NavLink>
            <div className={s.svg}><IconSvg name={el.icon}/></div>
          </li>)}
        </ul>
      </nav>
    </aside>
  );
}
