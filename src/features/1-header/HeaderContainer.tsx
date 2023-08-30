import React from 'react';
import {connect} from "react-redux";
import {Header} from "features/1-header/Header";
import {AppStateType} from "app/redux-store";

export class HeaderContainer extends React.Component<ProfileTypeProps> {
    // componentDidMount() {
    //     this.props.authMeThunk();
    //     // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
    //     //     withCredentials: true
    //     // }).then(response => {
    //     //     if (response.data.resultCode === 0) {
    //     //         let {id, email, login} = response.data.data
    //     //         this.props.setUserData(id, email, login)
    //     //     }
    //     // })
    // }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}


export type ProfileTypeProps = MapDispatchPropsType & MapStateToPropsType;


type MapStateToPropsType = {
    id?: number | null,
    email?: string | null,
    login?: string | null,
    isAuth: boolean,
    // loading:boolean,
}
// loading:boolean,

type MapDispatchPropsType = {
    // authMeThunk:()=>void,
    // setUserData: (userId: number, email: string, login: string) => void,
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.loginAuthorization.isAuth,
        login: state.loginAuthorization.login,
    }
}

export const HeaderContainerConnect = connect(mapStateToProps, {
    // authMeThunk: authMeThunkC,
    // setUserData: setUserDataAC,
})(HeaderContainer);