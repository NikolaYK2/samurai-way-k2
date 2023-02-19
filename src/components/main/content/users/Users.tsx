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
import s from "./Users.module.css";
import userPhotos from "./pngwing.com.png";
import {Expectation, UsersType} from "../../../../redux/usersReducers";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../../api/api";

type UsersTypeComponent = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    expectation:(Expectation | string)[],

    users: UsersType[],
    pageChange: (page: number) => void,
    unFollow: (userId: string) => void,
    follow: (userId: string) => void,
    setUsers: (users: UsersType[]) => void,
    toggleExpectation: (userId:string, onOff: boolean) => void,
}

export const Users = (props: UsersTypeComponent) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (i === 12) {
            break;
        } else {
            pages.push(i);
        }
    }

    const unFollowHandler = (id: string) => {
        props.toggleExpectation(id,true, );
        usersAPI.deleteFollow(id).then(data => {
            if (data.resultCode === 0) {
                props.unFollow(id);
            }
            props.toggleExpectation(id,false);
        });
        // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,  {
        //     withCredentials: true,
        //     headers: {'API-KEY': 'ac221b8b-8a64-47b0-b88a-297bbd35a29e'}
        // }).then(response => {
        //     if (response.data.resultCode === 0) {
        //         props.unFollow(u.id);
        //     }
        // })
    }
    const followHandler = (id: string) => {
        props.toggleExpectation(id,true);
        usersAPI.postFollow(id).then(data => {
            if (data.resultCode === 0) {
                props.follow(id);
            }
            props.toggleExpectation(id,false);
        });
    }

    return (
        <div className={s.container}>
            Users
            <div className={s.containerPages}>
                {pages.map((p, index) => {
                    return (
                        <span key={index}
                              className={props.currentPage === p ? s.pageActive : s.page}
                              onClick={() => props.pageChange(p)}
                        >{p}</span>
                    );
                })/*.slice(0,11)*/}
            </div>
            <div className={s.container__data}>
                {/*<button onClick={this.getUsers}>Get users</button>*/}
                {props.users.map(u => {

                    // const unFollowHandler = () => {
                    //    usersAPI.deleteFollow(u.id).then(data => {
                    //         if (data.resultCode === 0) {
                    //             props.unFollow(u.id);
                    //         }
                    //     })
                    //     // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,  {
                    //     //     withCredentials: true,
                    //     //     headers: {'API-KEY': 'ac221b8b-8a64-47b0-b88a-297bbd35a29e'}
                    //     // }).then(response => {
                    //     //     if (response.data.resultCode === 0) {
                    //     //         props.unFollow(u.id);
                    //     //     }
                    //     // })
                    // }
                    // const followHandler = () => {
                    //     usersAPI.postFollow(u.id).then(data => {
                    //         if (data.resultCode === 0) {
                    //             props.follow(u.id);
                    //         }
                    //     })
                    // }

                    return (
                        <div key={u.id} className={s.containerUsers}>
                            <div className={s.containerUsers__item}>
                                <div className={s.containerUsers__avatar}>
                                    <div>
                                        <NavLink to={`/profile/${u.id}`}>
                                            <img src={u.photos.small !== null ? u.photos.small : userPhotos} alt=""/>
                                        </NavLink>
                                    </div>

                                    {u.followed
                                        ? <button disabled={props.expectation.some(id=>id === u.id)} className={s.containerUsers__button} onClick={() => unFollowHandler(u.id)}>Follow</button>
                                        : <button disabled={props.expectation.some(id=>id === u.id)} className={s.containerUsers__button} onClick={() => followHandler(u.id)}>Unfollow</button>
                                        // <button className={s.containerUsers__button} onClick={()=>onClickUnFollow(u.id)}>Follow</button> :
                                        // <button className={s.containerUsers__button} onClick={()=>onClickFollow(u.id)}>Unfollow</button>
                                    }

                                </div>
                                <div className={s.containerUsers__title}>
                                    <div>
                                        <span className={s.containerUser__name}>{u.name}</span>
                                        <span className={s.containerUser__status}>{u.status}</span>
                                    </div>
                                    <div>
                                        <span>{'u.location.country'}</span>
                                        <span>{'u.location.city'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <button className={s.container__button} onClick={() => props.setUsers(props.users)}>show
                more
            </button>
        </div>
    );
};

