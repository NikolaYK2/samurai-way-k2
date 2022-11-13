import React from "react";
import s from "./Users.module.css";
import userPhotos from "./pngwing.com.png";
import {UsersTypeProps} from "./UsersContiner";
import axios from "axios";

export class Users extends React.Component<UsersTypeProps> {
    // constructor(props: UsersTypeProps) { //мы ничего нового конструировать не будем, можно не записывать
    //     super(props);
    //
    // }
    componentDidMount() {
        //Get Ничего кроме адреса мы отправить не можем, когда ответ с сервера придет, пишем .then(response=> и можем выполнить какую-то логику)
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        })
    }

     //class это не функция, props мы теперь не найдем, props это теперь часть обьекта this, теперь через this достаем
    // getUsers = ()=>{//не должна быть let, это теперь не переменная а метод, св-в объекта
    //     if (this.props.users.length === 0) {
    //         //Get Ничего кроме адреса мы отправить не можем, когда ответ с сервера придет, пишем .then(response=> и можем выполнить какую-то логику)
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
    //             this.props.setUsers(response.data.items);
    //         })
    //     }
    // }

    render = () => {//Единственный метод, который вы должны определить в React.Componentподклассе, называется render()
        //теперь и кнопке мы передаем на onClick не переменную а метод через this.getUsers
        return (
            <div className={s.container}>
                Users
                <div className={s.container__data}>
                    {/*<button onClick={this.getUsers}>Get users</button>*/}
                    {this.props.users.map(u => {
                        return (
                            <div key={u.id} className={s.containerUsers}>
                                <div className={s.containerUsers__item}>
                                    <div className={s.containerUsers__avatar}>
                                        <div>
                                            <img src={u.photos.small !== null ? u.photos : userPhotos} alt=""/>
                                        </div>

                                        {u.followed ?
                                            // <button className={s.containerUsers__button} onClick={()=>onClickUnFollow(u.id)}>Follow</button> :
                                            // <button className={s.containerUsers__button} onClick={()=>onClickFollow(u.id)}>Unfollow</button>
                                            <button className={s.containerUsers__button}
                                                    onClick={() => this.props.unFollow(u.id)}>Follow</button> :
                                            <button className={s.containerUsers__button}
                                                    onClick={() => this.props.follow(u.id)}>Unfollow</button>
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
                <button className={s.container__button} onClick={() => this.props.setUsers(this.props.users)}>show
                    more
                </button>
            </div>
        );
    }
}