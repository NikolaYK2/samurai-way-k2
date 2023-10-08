import React, {useRef} from "react";
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
    {name: 'News', link: '/news', icon: '4-news'},
    {name: 'Music', link: '/music', icon: '5-music'},
    {name: 'Friends', link: '/friends', icon: 'users'},
    {name: 'Settings', link: '/settings', icon: 'setting'},
  ]

  const changeNav = useRef<HTMLDivElement>(null)
  const location = useLocation();
  const profile = location.pathname.includes('/profile')

  const changeNavHandle = () => {
    changeNav.current?.classList.toggle(s.changeNav)
  }
  const offNavHandle = () => {
    changeNav.current?.classList.remove(s.changeNav)
  }

  return (
    <div className={s.container}>
      <div className={`${s.profile} ${!profile && s.on}`}>
        <BcAvatarProfile onOffAvatar={!profile} classMod={{ava: s.modAvatar, bc: s.modBcImg}}/>
      </div>

      <aside className={`${s.containerNav} ${profile && s.burger}`}
             onClick={changeNavHandle} ref={changeNav}
             onMouseLeave={offNavHandle}>

        <nav className={s.nav}>
          <ul>
            {links.map(el => <li key={el.name}>
              <MemoNavLink to={el.link} className={({isActive}) => isActive ? s.activeLink : ''}>{el.name}</MemoNavLink>
              <div className={s.svg}><IconSvg name={el.icon}/></div>
            </li>)}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
