import React from "react";
import s from "./Nav.module.css";
import {useLocation} from "react-router-dom";
import {IconSvg} from "common/components/iconSvg/IconSVG";
import {BcAvatarProfile} from "common/components/bcAvatarProfile/BcAvatarProfile";
import {MemoNavLink} from "common/utills/MemoNavLink";

export const Nav = () => {

  const links = [
    {name: 'Profile', link: '/profile', icon: 'loginIn'},
    {name: 'Messages', link: '/messages', icon: 'message'},
    {name: 'Users', link: '/users', icon: 'users'},
    {name: 'News', link: '/news', icon: 'news'},
    {name: 'Music', link: '/music', icon: 'music'},
    {name: 'Settings', link: '/settings', icon: 'setting'},
    {name: 'Friends', link: '/friends', icon: 'users'},
  ]

  const location = useLocation();
  const profile = location.pathname.includes('/profile')

  return (
    <aside className={`${s.container} ${profile && s.burger}`}>
      <nav className={s.nav}>
        <div className={`${s.profile} ${!profile && s.off}`}>
          <BcAvatarProfile onOffAvatar={!profile} classMod={{ava: s.modAvatar, bc: s.modBcImg}}/>
        </div>
        <ul>
          {links.map(el => <li key={el.name}>
            <MemoNavLink to={el.link} className={({isActive}) => isActive ? s.activeLink : ''}>{el.name}</MemoNavLink>
            <div className={s.svg}><IconSvg name={el.icon}/></div>
          </li>)}
        </ul>
      </nav>
    </aside>
  );
}
