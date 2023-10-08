import React from 'react';
import {connect} from "react-redux";
import {setStatusFriendAC, setUsersFriendTC, statuses} from "features/redux/friendsReducer";
import {Friends} from "features/2-main/content/6-friends/Friends";
import {UsersType} from "common/api/api";
import {AppStateType} from "app/redux-store";

class FriendsApi extends React.Component<FriendsTypeProps> {
    componentDidMount() {
        if (this.props.status === statuses.NOT_INITIALIZED) {
            this.props.setUsersFriend(this.props.users);
            // axios.get()
        }

    }


    render = () => {

        return (
            <div>
                <Friends users={this.props.users}/>
            </div>)
    }

}


//CONTAINER COMPONENT =========================================================
type FriendsTypeProps = MapStateToPropsType & MapDispatchToPropsType;

type MapDispatchToPropsType = {
    setUsersFriend: (users: UsersType[]) => void,
    setStatusFriend: (status: string) => void,
}
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         setUsersFriend: (3-users: any) => {
//             dispatch(setUsersFriendAC(3-users));
//         },
//         setStatusFriend: (status: any) => {
//             dispatch(setStatusFriendAC(status));
//         },
//     };
// };
type MapStateToPropsType = {
    users: UsersType[],
    status: string,
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.friends.users,
        status: state.friends.status,
    }
}

export const FriendsContainer = connect(mapStateToProps, {
    // setUsersFriend: setUsersFriendAC,
    setUsersFriend: setUsersFriendTC,
    setStatusFriend: setStatusFriendAC,
})(FriendsApi);


//THUNK =============================================================