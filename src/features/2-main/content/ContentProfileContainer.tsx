import React, {useEffect} from "react";
import s from "features/2-main/content/ContentProfile.module.css";
import {connect} from "react-redux";
import {compose} from "redux";
import {Profile} from "features/2-main/content/1-MyProfile/ui/MyProfile";
import MyPostContainer from "features/2-main/content/1-MyProfile/ui/myPost/MyPostContainer";
import {withRouter, WithRouterProps} from "common/selectors/WithRouter";
import {
    deletePostAC,
    getUserProfileThunkCreator, postDataType,
    ProfileUserType,
    setStatusThunkCreator,
    updStatusThunkCreator
} from "features/2-main/content/1-MyProfile/model/proFilePageReducer";
import {AppStateType} from "app/model/redux-store";
import {RedirectContainer} from "common/hoc/RedirectContainer";

const ContentProfileContainer = (props: ProfileTypeProps) => {

    let userId: number | null = props.params.userId;
    if (!userId) {
        userId = props.userId;
    }

    useEffect(() => {
        props.getUserProfile(userId);
        props.setStatus(userId);

    }, [])

    return (
        <section className={s.content}>
            <Profile />
            <MyPostContainer/>
        </section>
    );

}

type ProfileTypeProps = MapStateToPropsType & MapDispatchPropsType & WithRouterProps;

type MapStateToPropsType = {
    profile: ProfileUserType | null,
    postData: postDataType[]
    isAuth?: boolean,
    status: string,
    userId: number | null,
}

type MapDispatchPropsType = {
    getUserProfile: (userId: number | null) => void,
    setStatus: (userId: number | null) => void,
    updStatus: (status: string) => void,
    deletePost: (postId: string) => void
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.proFilePage.profile,
        status: state.proFilePage.status,
        userId: state.loginAuthorization.id,
        isAuth: state.loginAuthorization.isAuth,
        postData: state.proFilePage.postData
        // isAuth: state.loginAuthorization.isAuth,
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile: getUserProfileThunkCreator,
        setStatus: setStatusThunkCreator,
        updStatus: updStatusThunkCreator,
        deletePost: deletePostAC
    }),
    withRouter,
    RedirectContainer,
)(ContentProfileContainer);





