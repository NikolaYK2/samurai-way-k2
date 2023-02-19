import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {loginMeThunkC, setUserDataAC} from "../../redux/loginReducer";

export class HeaderContainer extends React.Component<ProfileTypeProps> {
    componentDidMount() {
        this.props.loginMeThunk();
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //     withCredentials: true
        // }).then(response => {
        //     if (response.data.resultCode === 0) {
        //         let {id, email, login} = response.data.data
        //         this.props.setUserData(id, email, login)
        //     }
        // })
    }

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
    setUserData: (userId: number, email: string, login: string) => void,
    loginMeThunk:()=>void,
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.loginAuthorization.isAuth,
        login: state.loginAuthorization.login,
    }
}

export const HeaderContainerConnect = connect(mapStateToProps, {
    setUserData: setUserDataAC,
    loginMeThunk: loginMeThunkC,

})(HeaderContainer);