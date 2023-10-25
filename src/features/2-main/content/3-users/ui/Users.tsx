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
// //         if (props.3-users.length === 0) {
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
// //         //                 status: 'Cool 6-friends',
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
//                 {/*<button onClick={getUsers}>Get 3-users</button>*/}
//                 {props.3-users.map(u => {
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
//             <button className={s.container__button} onClick={() => props.setUsers(props.3-users)}>show more</button>
//         </div>
//     );
// };
//
//
//
import React from 'react';
import s from "features/2-main/content/3-users/ui/Users.module.css";
import {UsersType} from "common/api/api";
import {Expectation} from "features/2-main/content/3-users/model/usersReducers";
import {Paginator} from "common/components/paginator/Paginator";
import {User} from "features/2-main/content/3-users/ui/User";
import {Loading} from "common/components/loading/Loading";
import {useAppSelector} from "app/model/redux-store";

type UsersTypeComponent = {
    totalItemsCount: number,
    pageSize: number,
    currentPage: number,
    expectation: (Expectation | string)[],

    users: UsersType[],
    pageChange: (page: number) => void,
    setUsers: (users: UsersType[]) => void,
    unFollowThunk: (userId: string) => void,
    followThunk: (userId: string) => void,
}

export const Users = (props: UsersTypeComponent) => {
const loading = useAppSelector(state => state.usersPage.loadingPage)

    return (
        <div className={`${s.container} ${'containerMod'}`}>
          {loading && <Loading/>}
          <Paginator totalItemsCount={props.totalItemsCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       pageChange={props.pageChange}/>

            <div className={s.container__data}>

                {props.users.map(u => <User key={u.id}
                                            user={u}
                                            expectation={props.expectation}
                                            unFollowThunk={props.unFollowThunk}
                                            followThunk={props.followThunk}/>
                )}

            </div>
            {/*<button className={s.container__button} onClick={() => props.setUsers(props.users)}>show*/}
            {/*    more*/}
            {/*</button>*/}
        </div>
    );
};

