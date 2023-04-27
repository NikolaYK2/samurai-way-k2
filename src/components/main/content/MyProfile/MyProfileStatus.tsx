import React, {ChangeEvent} from 'react';
import s from './MyProfileStatus.module.css'
import {InitializationStateType} from "../../../../redux/usersReducers";

type MyProfileStatusType={
    status:string,
    updStatus: (status:string)=>void,
}
export class MyProfileStatus extends React.Component<MyProfileStatusType> {
    // statusInputRef = React.createRef<HTMLInputElement>();
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
        // this.props.updStatus(e.currentTarget.value)
        this.props.updStatus(this.state.status)
        // this.props.updStatus(this.statusInputRef.current!.value)
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
                        // ref={this.statusInputRef}
                    ></input>
                }
            </div>
        )
    }


}

//Функциональная компонента ==================================================
// export const MyProfileStatus = (props: any) => {
//
//     const [editableMode, setEditableMode] =useState()
//
//     return (
//         <div className={s.blockStatus}>
//             <div >
//                 <span>{props.status}</span>
//             </div>
//             <div>
//                 <input value={props.status} placeholder={'status'}></input>
//             </div>
//         </div>
//     );
// };

