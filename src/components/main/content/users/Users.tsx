import {UsersTypeProps} from "./UsersContiner";
import s from './Users.module.css';
import {v1} from "uuid";

export const Users = (props: UsersTypeProps) => {
if(props.users.length === 0) {
    props.setUsers([
        {
            id: v1(),
            avatar: 'https://thypix.com/wp-content/uploads/2021/05/baby-yoda-77-700x474.jpg',
            followed: false,
            fullName: "Nikolay",
            status: 'I am a cool chell',
            location: {city: 'Molodechno', country: 'Belarus'}
        },
        {
            id: v1(),
            avatar: 'https://abrakadabra.fun/uploads/posts/2021-12/1639843636_2-abrakadabra-fun-p-milie-vedmi-2.jpg',
            followed: true,
            fullName: "Vitalia",
            status: 'Wife',
            location: {city: 'Zibkovo', country: 'Ukraine'}
        },
        {
            id: v1(),
            avatar: 'https://klike.net/uploads/posts/2020-01/1578990591_1.jpeg',
            followed: false,
            fullName: "Dima",
            status: 'Cool friends',
            location: {city: 'Varshava', country: 'Polish'}
        },
    ])
}

    return (
        <div className={s.container}>
            Users
            <div className={s.container__data}>
                {props.users.map(u => {
                    return (
                        <div key={u.id} className={s.containerUsers}>
                            <div className={s.containerUsers__item}>
                                <div className={s.containerUsers__avatar}>
                                    <div>
                                        <img src={u.avatar} alt=""/>
                                    </div>

                                    {u.followed ?
                                        <button className={s.containerUsers__button} onClick={()=>props.unFollow(u.id)}>Follow</button> :
                                        <button className={s.containerUsers__button} onClick={()=>props.follow(u.id)}>Unfollow</button>
                                    }
                                </div>
                                <div className={s.containerUsers__title}>
                                    <div>
                                        <span className={s.containerUser__name}>{u.fullName}</span>
                                        <span className={s.containerUser__status}>{u.status}</span>
                                    </div>
                                    <div>
                                        <span>{u.location.country}</span>
                                        <span>{u.location.city}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <button className={s.container__button} onClick={()=>props.setUsers(props.users)}>show more</button>
        </div>
    );
};


