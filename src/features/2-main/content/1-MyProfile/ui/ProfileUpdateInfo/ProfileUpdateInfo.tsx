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
import {profileInfoTextInputs, requiredTextInputs} from "common/utills/errorsText";
import {Button} from "common/components/button/Button";

type Props = {
  statusProfile: boolean
}
export const ProfileUpdateInfo = (props: Props) => {
  const myId = useAppSelector(state => state.loginAuthorization.id)
  const profile = useAppSelector(optimizedProfileSelect)
  const contacts = useAppSelector(optimizedProfileContactsSelect)

  const {register, handleSubmit, formState: {errors, isSubmitting, isValid}} = useForm<UpdProfileType>({
    defaultValues: {
      userId: myId || undefined,
      lookingForAJob: profile?.lookingForAJob,
      lookingForAJobDescription: profile?.lookingForAJobDescription,
      fullName: profile?.fullName,
      contacts: {
        github: profile?.contacts.github,
        vk: profile?.contacts.vk,
        facebook: profile?.contacts.facebook,
        instagram: profile?.contacts.instagram,
        twitter: profile?.contacts.twitter,
        website: profile?.contacts.website,
        youtube: profile?.contacts.youtube,
        mainLink: profile?.contacts.mainLink,
      }
    }
  })

  const onSubmit: SubmitHandler<UpdProfileType> = data => {
    console.log(data)
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

                <>
                  <input
                    type={'text'}
                    {...register('fullName', {required: requiredTextInputs})}/>
                  <p>{errors.fullName?.message}</p>
                </>
              }
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
                <input type={'text'} {...register('lookingForAJobDescription', {required: requiredTextInputs})}/>
                <p>{errors.lookingForAJobDescription?.message}</p>
              </>
            }
            </td>
          </tr>
          <tr className={s.blockContacts}>
            <td>Contacts</td>
            {props.statusProfile ||
              contacts.map(contact => {
                return <td key={contact.name} className={s.contacts}><a href={contact.link} className={s.link}><IconSvg
                  name={contact.name}/></a>
                  {<div className={s.input}><input type="text"
                                                   {...register(`contacts.${contact.name}`, {
                                                     required: requiredTextInputs,
                                                     pattern: {
                                                       value: profileInfoTextInputs,
                                                       message: 'incorrect messenger names'
                                                     }
                                                   })}/>
                    <p>{errors.contacts?.[contact.name]?.message}</p>
                  </div>
                  }
                </td>
              })}
          </tr>
          </tbody>
        </table>

        {!props.statusProfile && <Button name={'save'} disabled={false}/>}
      </form>

    </div>
  );
};

