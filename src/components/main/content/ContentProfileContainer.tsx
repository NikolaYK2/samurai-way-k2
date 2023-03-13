import React, {useEffect} from "react";
import s from "./ContentProfile.module.css";
import {Profile} from "./MyProfile/MyProfile";
import MyPostContainer from "./MyProfile/myPost/MyPostContainer";
import {connect} from "react-redux";
import {
    getUserProfileThunkCreator,
    ProfileUserType,
    setStatusThunkCreator,
    updStatusThunkCreator
} from "../../../redux/proFilePageReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {AppStateType} from "../../../redux/redux-store";
import {compose} from "redux";

// type ContentProfileType = {
//     // store: StoreType,
//     // addPost:()=>void,
//     // proFilePage:proFilePageType,
//     // addPostChange:(newMessageUsers: any)=>void,
// }

export interface WithRouterProps {
    location: ReturnType<typeof useLocation>;
    params: Record<string, number>;
    navigate: ReturnType<typeof useNavigate>;
}

export const withRouter = <Props extends WithRouterProps>(
    Component: React.ComponentType<Props>
) => {
    return (props: Omit<Props, keyof WithRouterProps>) => {
        const location = useLocation();
        const params = useParams();
        const navigate = useNavigate();

        return (
            <Component
                {...(props as Props)}
                location={location}
                params={params}
                navigate={navigate}
            />
        );
    };
};
// function withRouter(Component:any) {
//     function ComponentWithRouterProp(props:any) {
//         let location = useLocation();
//         let navigate = useNavigate();
//         let params = useParams();
//         return (
//             <Component
//                 {...props}
//                 router={{ location, navigate, params }}
//             />
//         );
//     }
//
//     return ComponentWithRouterProp;
// }
// const withRouter = (WrappedComponent:any) => (props:any) => {
//     const params = useParams();
//     // etc... other react-router-dom v6 hooks
//     return (
//         <WrappedComponent
//             {...props}
//             params={params}
//             // etc...
//         />
//     );
// };

const ContentProfileContainer = (props: ProfileTypeProps) => {


    useEffect(() => {
        let userId = props.params.userId;
        if (!userId) {
            userId = 2;
        }
        props.getUserProfile(userId);
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
        //     props.setUserProfile(response.data);
        // });
        // usersAPI.getUserProfile(userId).then(data => {
        //     props.setUserProfile(data);
        // });

        // setTimeout(()=>{
            props.setStatus(userId);
        // },1000);
    }, [])

    // if (!props.isAuth) {
    //     return <Navigate to={'/login'} />
    // }

    return (
        <section className={s.content}>
            <Profile {...props} profile={props.profile} status={props.status} updStatus={props.updStatus}/>
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

//RedirectContainer ============================================================
// let RedirectComponentContainer = RedirectContainer(ContentProfileContainer);
// let mapStateToPropsRedirect = (state: any): MapStateToPropsType => {
//     return {
//         isAuth: state.loginAuthorization.isAuth,
//     }
// }
// RedirectComponentContainer = connect(mapStateToPropsRedirect)(RedirectComponentContainer);
//RedirectContainer ============================================================


// export class ContentProfileContainer extends  React.Component<ProfileTypeProps>{
//
//     componentDidMount() {
//         let userId = this.props.params.userId;
//         if (!userId){
//             userId=2;
//         }
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
//             this.props.setUserProfile(response.data);
//         });
//
//     };
//
//     render() {
//
//         return (
//             <section className={s.content}>
//                 <div className={s.content__wrap}>
//                     <img
//                         src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
//                         alt=""/>
//                 </div>
//                 <Profile {...this.props} profile={this.props.profile}/>
//                 <MyPostContainer /*store={props.store}*/
//                     //     dispatch={props.store.dispatch.bind(props.store)}
//                     // // addPost={props.store.dispatch.bind(props.store)}
//                     // // addPostChange={props.addPostChange}
//                     // // addPostChange={props.store.dispatch.bind(props.store)}
//                     //     message={props.store.getState().proFilePage.message}
//                 />
//             </section>
//         );
//
//     }
// }


type ProfileTypeProps = MapStateToPropsType & MapDispatchPropsType & WithRouterProps;

type MapStateToPropsType = {
    profile: ProfileUserType | null,
    isAuth?: boolean,
    status:string,
}

type MapDispatchPropsType = {
    // setUserProfile: (profile: ProfileUserType | null) => void,
    getUserProfile: (userId: number) => void,
    setStatus:(userId:number)=>void,
    updStatus:(status:string)=>void,
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.proFilePage.profile,
        status: state.proFilePage.status,
        // isAuth: state.loginAuthorization.isAuth,
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        // setUserProfile: setUserProfileAC,
        getUserProfile: getUserProfileThunkCreator,
        setStatus:setStatusThunkCreator,
        updStatus: updStatusThunkCreator,
    }),
    withRouter,
    // RedirectContainer
)(ContentProfileContainer);

// let WithURLDataContainerComponent = withRouter(ContentProfileContainer);
//
// export const ProfileContainer = RedirectContainer(connect(mapStateToProps, {
//     // setUserProfile: setUserProfileAC,
//     getUserProfile: getUserProfileThunkCreator,
// })(WithURLDataContainerComponent));




