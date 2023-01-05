import React from 'react';
import {AppStateType} from "../../../../redux/redux-store";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    switchLoadingAC,
    unFollowAC,
    UsersType
} from "../../../../redux/usersReducers";
import axios from "axios";
import {Users} from "./Users";
import {Loading} from "../../../loading/Loading";

//Контейнерная class компонента которая делает API
class UsersAPIComponent extends React.Component<UsersTypeProps> {
    // constructor(props: UsersTypeProps) { //мы ничего нового конструировать не будем, можно не записывать
    //     super(props);
    //
    // }
    componentDidMount() {
        //Get Ничего кроме адреса мы отправить не можем, когда ответ с сервера придет, пишем .then(response=> и можем выполнить какую-то логику)
        this.props.switchLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
            withCredentials:true,
        }).then(response => {
            this.props.switchLoading(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
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

    pageChange = (page: number) => {//меняем страницы
        this.props.setCurrentPage(page);
        this.props.switchLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,{
            withCredentials:true,
        }).then(response => {
            this.props.switchLoading(false);
            this.props.setUsers(response.data.items);
        })

    }

    render = () => {//Единственный метод, который вы должны определить в React.Componentподклассе, называется render()
        //теперь и кнопке мы передаем на onClick не переменную а метод через this.getUsers

        // let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        // let pages: number[] = [];
        // for (let i = 1; i <= pagesCount; i++) {
        //     pages.push(i);
        // }

        return (
            <div>
                {this.props.loadingPage && <Loading/>}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}

                    pageChange={this.pageChange}
                    unFollow={this.props.unFollow}
                    follow={this.props.follow}
                    setUsers={this.props.setUsers}
                />
            </div>
            // <div className={s.container}>
            //     Users
            //     <div>
            //         {pages.map((p, index) => {
            //             return (
            //                 <span key={index}
            //                       className={this.props.currentPage === p ? s.pageActive : s.containerPage}
            //                       onClick={() => this.pageChange(p)}
            //                 >{p}</span>
            //             );
            //         })}
            //     </div>
            //     <div className={s.container__data}>
            //         {/*<button onClick={this.getUsers}>Get users</button>*/}
            //         {this.props.users.map(u => {
            //             return (
            //                 <div key={u.id} className={s.containerUsers}>
            //                     <div className={s.containerUsers__item}>
            //                         <div className={s.containerUsers__avatar}>
            //                             <div>
            //                                 <img src={u.photos.small !== null ? u.photos : userPhotos} alt=""/>
            //                             </div>
            //
            //                             {u.followed ?
            //                                 // <button className={s.containerUsers__button} onClick={()=>onClickUnFollow(u.id)}>Follow</button> :
            //                                 // <button className={s.containerUsers__button} onClick={()=>onClickFollow(u.id)}>Unfollow</button>
            //                                 <button className={s.containerUsers__button}
            //                                         onClick={() => this.props.unFollow(u.id)}>Follow</button> :
            //                                 <button className={s.containerUsers__button}
            //                                         onClick={() => this.props.follow(u.id)}>Unfollow</button>
            //                             }
            //                         </div>
            //                         <div className={s.containerUsers__title}>
            //                             <div>
            //                                 <span className={s.containerUser__name}>{u.name}</span>
            //                                 <span className={s.containerUser__status}>{u.status}</span>
            //                             </div>
            //                             <div>
            //                                 <span>{'u.location.country'}</span>
            //                                 <span>{'u.location.city'}</span>
            //                             </div>
            //                         </div>
            //                     </div>
            //                 </div>
            //             );
            //         })}
            //     </div>
            //     <button className={s.container__button} onClick={() => this.props.setUsers(this.props.users)}>show
            //         more
            //     </button>
            // </div>
        );
    }
}




export type UsersTypeProps = MapStatePropsType & MapDispatchPropsType;

export type MapStatePropsType = {
    users: UsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    loadingPage:boolean,
}

export type MapDispatchPropsType = {
    follow: (userId: string) => void,//если в функции есть return например 10(числа), то уже не void пишется а number(state и т.д.)
    unFollow: (userId: string) => void,
    setUsers: (users: UsersType[]) => void,
    setCurrentPage: (page: number) => void,
    setTotalUsersCount:(totalCount:number)=>void,
    switchLoading:(onOff:boolean)=>void,
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {//название функции обозначает замапить state на пропсы
    return {
        //getState мы уже не делаем
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        loadingPage: state.usersPage.loadingPage,
    }
}
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         follow: (userId: string) => (dispatch(followAC(userId))),
//         unFollow: (userId: string) => (dispatch(unFollowAC(userId))),
//         setUsers: (users: UsersType[]) => (dispatch(setUsersAC(users))),
//         setCurrentPage: (page: number) => (dispatch(setCurrentPageAC(page))),
//         setTotalUsersCount:(totalCount:number)=>(dispatch(setTotalUsersCountAC(totalCount))),
//         switchLoading:(onOff:boolean)=>(dispatch(switchLoadingAC(onOff))),
//     }
// }
export const UsersContainer = connect(mapStateToProps, {
    follow: followAC,
    unFollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount:setTotalUsersCountAC,
    switchLoading:switchLoadingAC,
})(UsersAPIComponent);
// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);