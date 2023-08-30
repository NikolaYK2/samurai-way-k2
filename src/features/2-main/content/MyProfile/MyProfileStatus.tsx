import React, {ChangeEvent} from 'react';
import s from './MyProfileStatus.module.css'
import {InitializationStateType} from "features/redux/usersReducers";

type MyProfileStatusType={
    status:string,
    updStatus: (status:string)=>void,
}
export class MyProfileStatus extends React.Component<MyProfileStatusType> {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode(){
        this.setState({
            editMode: false
        });
        this.props.updStatus(this.state.status)
    }
    onStatusChange=(e:ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            status: e.currentTarget.value,
        })
    }

    componentDidUpdate(prevProps: Readonly<MyProfileStatusType>, prevState: Readonly<InitializationStateType>) {
        //Что бы не зациклилось, всегда нужно делать внутри какого-то условия
//Если в предыдущих пропсах статус !==- который не равен статусу в текущих пропсах,
//нужно обновить статус
        if (prevProps.status !== this.props.status){
            this.setState({status: this.props.status})
        }
    }

    render() {
        return (
            <div className={s.blockStatus}>
                {!this.state.editMode ?
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || 'no status'}</span>
                    :
                    <input autoFocus={true}
                           onBlur={this.deactivateEditMode.bind(this)}
                           value={this.state.status} placeholder={'status'}
                           onChange={this.onStatusChange}
                    ></input>
                }
            </div>
        )
    }


}

