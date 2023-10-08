//Users components Fn
// import {UsersTypeProps} from "./UsersContiner";
// import s from './Users.module.css';
// import axios from "axios";
// import userPhotos from './pngwing.com.png';
// import React, {useEffect} from "react";
//
// export const Userss = (props: UsersTypeProps) => {
//
//     useEffect(() => {
//      axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
//          props.setUsers(response.data.items)
//      })
//     },[props.setUsers])
// //     const getUsers = ()=>{//Как бы лишаем Users сайд эфекта
// //         if (props.users.length === 0) {
// //             //Get Ничего кроме адреса мы отправить не можем, когда ответ с сервера придет, пишем .then(response=> и можем выполнить какую-то логику)
// //             axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
// //                 props.setUsers(response.data.items);
// //             })
// //         }
// //         //     props.setUsers([
// //         //             {
// //         //                 id: v1(),
// //         //                 photos: 'https://thypix.com/wp-content/uploads/2021/05/baby-yoda-77-700x474.jpg',
// //         //                 followed: false,
// //         //                 name: "Nikolay",
// //         //                 status: 'I am a cool chell',
// //         //                 location: {city: 'Molodechno', country: 'Belarus'}
// //         //             },
// //         //             {
// //         //                 id: v1(),
// //         //                 photos: 'https://abrakadabra.fun/uploads/posts/2021-12/1639843636_2-abrakadabra-fun-p-milie-vedmi-2.jpg',
// //         //                 followed: true,
// //         //                 name: "Vitalia",
// //         //                 status: 'Wife',
// //         //                 location: {city: 'Zibkovo', country: 'Ukraine'}
// //         //             },
// //         //             {
// //         //                 id: v1(),
// //         //                 photos: 'https://klike.net/uploads/posts/2020-01/1578990591_1.jpeg',
// //         //                 followed: false,
// //         //                 name: "Dima",
// //         //                 status: 'Cool friends',
// //         //                 location: {city: 'Varshava', country: 'Polish'}
// //         //             },
// //         //         ]
// //         //     )
// //         // }
// // // const onClickFollow=(userId:string)=>{
// // //     props.follow(userId)
// // // }
// // // const onClickUnFollow=(userId:string)=>{
// // //     props.unFollow(userId)
// // // }
// //     }
//
//     return (
//         <div className={s.container}>
//             Users
//             <div className={s.container__data}>
//                 {/*<button onClick={getUsers}>Get users</button>*/}
//                 {props.users.map(u => {
//                     return (
//                         <div key={u.id} className={s.containerUsers}>
//                             <div className={s.containerUsers__item}>
//                                 <div className={s.containerUsers__avatar}>
//                                     <div>
//                                         <img src={u.photos.small !== null ? u.photos : userPhotos} alt=""/>
//                                     </div>
//
//                                     {u.followed ?
//                                         // <button className={s.containerUsers__button} onClick={()=>onClickUnFollow(u.id)}>Follow</button> :
//                                         // <button className={s.containerUsers__button} onClick={()=>onClickFollow(u.id)}>Unfollow</button>
//                                         <button className={s.containerUsers__button}
//                                                 onClick={() => props.unFollow(u.id)}>Follow</button> :
//                                         <button className={s.containerUsers__button}
//                                                 onClick={() => props.follow(u.id)}>Unfollow</button>
//                                     }
//                                 </div>
//                                 <div className={s.containerUsers__title}>
//                                     <div>
//                                         <span className={s.containerUser__name}>{u.name}</span>
//                                         <span className={s.containerUser__status}>{u.status}</span>
//                                     </div>
//                                     <div>
//                                         <span>{'u.location.country'}</span>
//                                         <span>{'u.location.city'}</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//             <button className={s.container__button} onClick={() => props.setUsers(props.users)}>show more</button>
//         </div>
//     );
// };
//
//
//
import React from 'react';
import s from "./User.module.css";
import userPhotos from "assets/img/users/pngwing.com.png";
import {NavLink} from "react-router-dom";
import {UsersType} from "common/api/api";
import {Expectation} from "features/redux/usersReducers";
import {Button} from "common/components/button/Button";

type UserTypeComponent = {
  key: string,
  user: UsersType,
  expectation: (Expectation | string)[],
  unFollowThunk: (userId: string) => void,
  followThunk: (userId: string) => void,
}

export const User = (props: UserTypeComponent) => {

  const unFollowHandler = (id: string) => {
    props.unFollowThunk(id)
  }
  const followHandler = (id: string) => {
    props.followThunk(id)
  }

  const disabled = props.expectation.some(id => id === props.user.id)
  const followUnfollow = props.user.followed ? unFollowHandler : followHandler
  const name = props.user.followed ? 'Follow' : 'Unfollow'

  return (
    <div className={s.containerUsers}>

      <div className={s.containerUsers__avatar}>
        <div>
          <NavLink to={`/profile/${props.user.id}`}>
            <img src={props.user.photos.small !== null ? props.user.photos.small : userPhotos} alt=""/>
          </NavLink>
        </div>
      </div>

      <div className={s.containerUsers__title}>
        <div>
          <span className={s.containerUser__name}>{props.user.name}</span>
          <span className={s.containerUser__status}>{props.user.status}</span>
        </div>
        <Button disabled={disabled} callBack={()=>followUnfollow(props.user.id)} name={name}/>
      </div>
    </div>
  );
};

