import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "app/model/redux-store";
import s from './ProfileUpdateInfo.module.css'
import {
  optimizedProfileContactsSelect,
  userIdSelector
} from "features/2-main/content/1-MyProfile/model/MyProfileSelectors";
import {IconSvg} from "common/components/iconSvg/IconSVG";
import {profileInfoTextInputs, requiredTextInputs} from "common/utills/errorsText";
import {Button} from "common/components/button/Button";
import {determineLinkUrl} from "common/utills/determineLinkUrl";
import {useHookForm} from "features/2-main/content/1-MyProfile/lib/useHookForm";
import {namesStatusFollowed, updateFollowState} from "common/utills/updateFollowState";
import {followedUserSelector} from "features/2-main/content/4-users/model/usersSelectors";
import {followThunkCreator, unFollowThunkCreator} from "features/2-main/content/4-users/model/usersReducers";
import {myIdSelector} from "features/0-auth/model/authSelectors";
import {useParams} from "react-router-dom";
import {getUserProfileThunkCreator} from "features/2-main/content/1-MyProfile/model/proFilePageReducer";

type Props = {
  statusProfile: boolean
  setStatusProfile: (status: boolean) => void
}
export const ProfileUpdateInfo = (props: Props) => {

  const {handleSubmit, onSubmit, profile, register, errors, isSubmitting} = useHookForm(props)
  const dispatch = useAppDispatch()
  const contacts = useAppSelector(optimizedProfileContactsSelect)
  const id = useAppSelector(userIdSelector)
  const myId = useAppSelector(myIdSelector)
  const expectation = useAppSelector(state => state.usersPage.expectation)
  const user = useAppSelector((state) => followedUserSelector(state, id))

  const {userId} = useParams()

  const {names, disabled, addAndRemove} = updateFollowState(
    // userId,
    user?.id,
    namesStatusFollowed,
    expectation,
    user?.followed,
    unFollowThunkCreator,
    followThunkCreator,
  )

  const handleAddAndRemove = () => {
    if (addAndRemove && user?.id) {
      dispatch(addAndRemove(user.id))
    }
  }


  useEffect(() => {
    if (userId) {
      dispatch(getUserProfileThunkCreator(+userId))
    } else {
      dispatch(getUserProfileThunkCreator(myId!))
    }
  }, [userId]);

  return (
    <div className={s.container}>
      <h2>{props.statusProfile ? 'View Profile' : 'Edit Profile'}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <table className={s.table}>
          <tbody>
          <tr>
            <td>Full name</td>
            <td>
              {props.statusProfile
                ?
                profile?.fullName
                :
                <>
                  <input
                    type={'text'}
                    {...register('fullName', {required: requiredTextInputs})}/>
                  <p>{errors.fullName?.message}</p>
                </>
              }
            </td>
          </tr>
          <tr>
            <td>AboutMe</td>
            <td>
              {props.statusProfile
                ?
                <span>{profile?.aboutMe}</span>
                :
                <>
                  <textarea {...register('aboutMe', {required: requiredTextInputs})}/>
                  <p>{errors.aboutMe?.message}</p>
                </>
              }
            </td>
          </tr>
          <tr>
            <td>Looking for a job</td>
            <td>
              {props.statusProfile
                ?
                <span>{profile?.lookingForAJob ? 'Yes' : 'No'}</span>
                :
                <input type={'checkbox'} {...register('lookingForAJob',)}/>
              }
            </td>
          </tr>
          <tr>
            <td>Looking for a job description</td>
            <td>{props.statusProfile
              ?
              profile?.lookingForAJobDescription
              :
              <>
                <textarea {...register('lookingForAJobDescription', {required: requiredTextInputs})}/>
                <p>{errors.lookingForAJobDescription?.message}</p>
              </>
            }
            </td>
          </tr>
          <tr className={s.blockContacts} style={{flexDirection: !props.statusProfile ? 'column' : 'initial'}}>
            <td>Contacts</td>

            {contacts.map(contact => {
              const linkUrl = determineLinkUrl(contact.link)
              return <td key={contact.name}
                         className={s.contacts}
                         style={{display: !contact.link && props.statusProfile ? 'none' : 'flex'}}>

                <a href={linkUrl} className={s.link}>
                  <IconSvg name={contact.name}/>
                </a>
                {props.statusProfile ||
                    <div className={s.input}>
                        <input type="text"{...register(`contacts.${contact.name}`, {
                          pattern: {
                            value: profileInfoTextInputs,
                            message: 'incorrect messenger names'
                          }
                        })}/>
                        <p>{errors.contacts?.[contact.name]?.message}</p>
                    </div>}

              </td>
            })}

          </tr>
          </tbody>
        </table>

        {!props.statusProfile && <Button name={'save'} disabled={isSubmitting}/>}
      </form>
      {myId !== id && <Button name={names} disabled={disabled} callBack={handleAddAndRemove}/>}
    </div>
  );
};

