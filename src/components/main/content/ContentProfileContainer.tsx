import React from "react";
import s from "./ContentProfile.module.css";
import {Profile} from "./MyProfile/MyProfile";
import MyPostContainer from "./MyProfile/myPost/MyPostContainer";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileUserType, setUserProfileAC} from "../../../redux/proFilePageReducer";
import {AppStateType} from "../../../redux/redux-store";

// type ContentProfileType = {
//     // store: StoreType,
//     // addPost:()=>void,
//     // proFilePage:proFilePageType,
//     // addPostChange:(newMessageUsers: any)=>void,
// }
export class ContentProfileContainer extends  React.Component<ProfileTypeProps>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data);
        });

    };

    render() {
        return (
            <section className={s.content}>
                <div className={s.content__wrap}>
                    <img
                        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                        alt=""/>
                </div>
                <Profile {...this.props} profile={this.props.profile}/>
                <MyPostContainer /*store={props.store}*/
                    //     dispatch={props.store.dispatch.bind(props.store)}
                    // // addPost={props.store.dispatch.bind(props.store)}
                    // // addPostChange={props.addPostChange}
                    // // addPostChange={props.store.dispatch.bind(props.store)}
                    //     message={props.store.getState().proFilePage.message}
                />
            </section>
        );

    }
}

type ProfileTypeProps = MapStateToPropsType & MapDispatchPropsType;

type MapStateToPropsType={
    profile:ProfileUserType | null,
}

type MapDispatchPropsType={
    setUserProfile:(profile:ProfileUserType | null)=>void,
}

const mapStateToProps =(state:AppStateType): MapStateToPropsType=>{
    return{
        profile: state.proFilePage.profile,
    }
}
export const ProfileContainer = connect(mapStateToProps, {
    setUserProfile: setUserProfileAC,
})(ContentProfileContainer);
