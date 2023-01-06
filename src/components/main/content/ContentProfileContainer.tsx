import React, {useEffect} from "react";
import s from "./ContentProfile.module.css";
import {Profile} from "./MyProfile/MyProfile";
import MyPostContainer from "./MyProfile/myPost/MyPostContainer";
import {connect} from "react-redux";
import {ProfileUserType, setUserProfileAC} from "../../../redux/proFilePageReducer";
import {AppStateType} from "../../../redux/redux-store";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {usersAPI} from "../../api/api";

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
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
        //     props.setUserProfile(response.data);
        // });
        usersAPI.getUserProfile(userId).then(data => {
            props.setUserProfile(data);
        });

    }, [])
    return (
        <section className={s.content}>
            <div className={s.content__wrap}>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt=""/>
            </div>
            <Profile {...props} profile={props.profile}/>
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
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileUserType | null) => void,
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.proFilePage.profile,
    }
}

let WithURLDataContainerComponent = withRouter(ContentProfileContainer);

export const ProfileContainer = connect(mapStateToProps, {
    setUserProfile: setUserProfileAC,
})(WithURLDataContainerComponent);




