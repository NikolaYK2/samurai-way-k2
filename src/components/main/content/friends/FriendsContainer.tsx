import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {setStatusFriendAC, setUsersFriendTC, statuses} from "../../../../redux/friendsReducer";
import {Friends} from "./Friends";
import {UsersType} from "../../../api/api";

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
//         setUsersFriend: (users: any) => {
//             dispatch(setUsersFriendAC(users));
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