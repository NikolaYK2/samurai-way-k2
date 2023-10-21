import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {UpdProfileType} from "features/2-main/content/1-MyProfile/api/profileApi";
import {useAppSelector} from "app/redux-store";
import s from './ProfileUpdateInfo.module.css'
import {
  optimizedProfileContactsSelect,
  optimizedProfileSelect
} from "features/2-main/content/1-MyProfile/model/MyProfileSelectors";
import {IconSvg} from "common/components/iconSvg/IconSVG";
import {requiredTextInputs} from "common/utills/errorsText";

type Props = {
  statusProfile: boolean
}
export const ProfileUpdateInfo = (props: Props) => {
  const myId = useAppSelector(state => state.loginAuthorization.id)
  const profile = useAppSelector(optimizedProfileSelect)
  const contacts = useAppSelector(optimizedProfileContactsSelect)
  console.log(contacts)

  const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<UpdProfileType>({
    defaultValues: {
      userId: myId || undefined,
      lookingForAJob: false,
      lookingForAJobDescription: '',
      fullName: '',
      contacts: {
        github: '',
        vk: '',
        facebook: '',
        instagram: '',
        twitter: '',
        website: '',
        youtube: '',
        mainLink: '',
      }
    }
  })

  const onSubmit: SubmitHandler<UpdProfileType> = data => {

  }

  return (
    <div className={s.container}>
      <h2>{props.statusProfile ? 'View Profile' : 'Edit Profile'}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <table>
          <tbody>
          <tr>
            <td>Full name</td>
            <td>
              {props.statusProfile
                ?
                profile?.fullName
                :
                <input placeholder={profile?.fullName}
                       type={'text'}
                       {...register('fullName', {required: requiredTextInputs})}/>}
            </td>
          </tr>
          {/*<tr>*/}
          {/*  <td>AboutMe</td>*/}
          {/*  <td>*/}
          {/*    {props.statusProfile && profile?.aboutMe}*/}
          {/*  </td>*/}
          {/*</tr>*/}
          <tr>
            <td>Looking for a job</td>
            <td>
              {props.statusProfile
                ?
                <span style={{color: 'red'}}>{!profile?.lookingForAJob ? 'Yes' : 'No'}</span>
                :
                <input type={'checkbox'} {...register('lookingForAJob',)}/>}
            </td>
          </tr>
          <tr>
            <td>Looking for a job description</td>
            <td>{props.statusProfile
              ?
              profile?.lookingForAJobDescription
              :
              <input type={'text'} {...register('lookingForAJobDescription', {required: requiredTextInputs})}/>}
            </td>
          </tr>
          <tr className={s.cont}>
            <td>Contacts</td>
            {props.statusProfile ||
              contacts.map(contact => {
                return <td key={contact.name} className={s.contacts}><a href={contact.link} className={s.link}><IconSvg name={contact.name}/></a>
                  {<input type="text" {...register(`contacts.${contact.name}`)}/>}
                </td>
              })}
          </tr>
          </tbody>
        </table>


      </form>

    </div>
  );
};

