import React, {useEffect} from "react";
import s from "./ContentProfile.module.css";
import {connect} from "react-redux";
import {compose} from "redux";
import {Profile} from "features/2-main/content/MyProfile/MyProfile";
import MyPostContainer from "features/2-main/content/MyProfile/myPost/MyPostContainer";
import {withRouter, WithRouterProps} from "common/selectors/WithRouter";
import {
    getUserProfileThunkCreator,
    ProfileUserType,
    setStatusThunkCreator,
    updStatusThunkCreator
} from "features/redux/proFilePageReducer";
import {AppStateType} from "app/redux-store";
import {RedirectContainer} from "common/hoc/RedirectContainer";

const ContentProfileContainer = (props: ProfileTypeProps) => {


    useEffect(() => {
        let userId: number | null = props.params.userId;
        if (!userId) {
            userId = props.userId;
        }
        props.getUserProfile(userId);
        props.setStatus(userId);
    }, [])

    return (
        <section className={s.content}>
            <Profile {...props}
                     profile={props.profile}
                     status={props.status}
                     updStatus={props.updStatus}/>
            <MyPostContainer/>
        </section>
    );

}

type ProfileTypeProps = MapStateToPropsType & MapDispatchPropsType & WithRouterProps;

type MapStateToPropsType = {
    profile: ProfileUserType | null,
    isAuth?: boolean,
    status: string,
    userId: number | null,
}

type MapDispatchPropsType = {
    getUserProfile: (userId: number | null) => void,
    setStatus: (userId: number | null) => void,
    updStatus: (status: string) => void,
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.proFilePage.profile,
        status: state.proFilePage.status,
        userId: state.loginAuthorization.id,
        isAuth: state.loginAuthorization.isAuth
        // isAuth: state.loginAuthorization.isAuth,
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile: getUserProfileThunkCreator,
        setStatus: setStatusThunkCreator,
        updStatus: updStatusThunkCreator,
    }),
    withRouter,
    RedirectContainer,
)(ContentProfileContainer);





