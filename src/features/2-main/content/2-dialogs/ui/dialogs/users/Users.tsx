import React, {memo, useEffect, useRef} from 'react';
import s from "features/2-main/content/2-dialogs/ui/dialogs/users/Users.module.css";
import {useAppDispatch, useAppSelector} from "app/model/redux-store";
import {MemoNavLink} from "common/utills/MemoNavLink";
import ava from 'assets/img/myProf/ava.jpg'
import {getUsersSelector} from "features/2-main/content/4-users/model/usersSelectors";
import {addFriendsThunkCreator} from "features/2-main/content/4-users/model/usersReducers";

export const Users = memo(() => {

  const friends = useAppSelector(getUsersSelector)
  const dispatch = useAppDispatch()
  const page = useRef(1); // создаем ссылку для хранения текущей страницы
  const loader = useRef<IntersectionObserver | null>(null); // создаем ссылку для нашего наблюдателя
  const loaderClassName = s.loader;

  useEffect(() => {
    dispatch(addFriendsThunkCreator( page.current, 12, true, loaderClassName, loader))
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0.8
    }
    loader.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          page.current++; // увеличиваем номер страницы
          dispatch(addFriendsThunkCreator( page.current, 12, true, loaderClassName, loader))
        }
      });
    }, options);

    // начинаем наблюдение
    const loaderElement = document.querySelector(`.${loaderClassName}`);
    if (loaderElement) {
      loader.current.observe(loaderElement);
    }

    return () => {
      // останавливаем наблюдение при размонтировании компонента
      if (loader.current) loader.current.disconnect();
    };
  }, []);

  return (
    <div className={`${s.dialogs__users} ${'customScroll'}`}>
      {friends.map((f) => {
        return (
          <div key={f.id} className={s.users}>
            <div className={s.users__avatar}>
              <MemoNavLink to={`/profile/${f.id}`}>
                <img src={f.photos?.small || ava} alt=""/>
              </MemoNavLink>
            </div>

            <MemoNavLink to={`/messages/${f.name}`} className={({isActive}) => isActive ? s.active : s.default}>
              <span>{f.name}</span>
              <span>{f.followed}</span>
            </MemoNavLink>

          </div>
        )
      })}
      <div className={loaderClassName}></div>
    </div>
  )
})

