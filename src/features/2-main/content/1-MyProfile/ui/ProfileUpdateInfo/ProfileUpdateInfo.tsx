import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {UpdProfileType} from "features/2-main/content/1-MyProfile/api/profileApi";
import {useAppDispatch, useAppSelector} from "app/redux-store";
import s from './ProfileUpdateInfo.module.css'
import {
  optimizedProfileContactsSelect,
  optimizedProfileSelect
} from "features/2-main/content/1-MyProfile/model/MyProfileSelectors";
import {IconSvg} from "common/components/iconSvg/IconSVG";
import {profileInfoTextInputs, requiredTextInputs} from "common/utills/errorsText";
import {Button} from "common/components/button/Button";
import {updUserProfileThunkCreator} from "features/2-main/content/1-MyProfile/model/proFilePageReducer";
import {myIdSelector} from "features/0-auth/model/authSelectors";

type Props = {
  statusProfile: boolean
}
export const ProfileUpdateInfo = (props: Props) => {
  const myId = useAppSelector(myIdSelector)
  const profile = useAppSelector(optimizedProfileSelect)
  const contacts = useAppSelector(optimizedProfileContactsSelect)
  const dispatch = useAppDispatch();

  const {register, handleSubmit, formState: {errors, isSubmitting, isValid}} = useForm<UpdProfileType>({
    defaultValues: {
      userId: myId || undefined,
      lookingForAJob: profile?.lookingForAJob,
      LookingForAJobDescription: profile?.lookingForAJobDescription,
      FullName: profile?.fullName,
      AboutMe:profile?.aboutMe || undefined,
      contacts: {
        github: profile?.contacts?.github,
        vk: profile?.contacts?.vk,
        facebook: profile?.contacts?.facebook,
        instagram: profile?.contacts?.instagram,
        twitter: profile?.contacts?.twitter,
        website: profile?.contacts?.website,
        youtube: profile?.contacts?.youtube,
        mainLink: profile?.contacts?.mainLink,
       }
    }
  })
  console.log(profile?.fullName)

  const onSubmit: SubmitHandler<UpdProfileType> = data => {
    console.log(data)
    dispatch(updUserProfileThunkCreator(data))
  }

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
                    {...register('FullName', {required: requiredTextInputs})}/>
                  <p>{errors.FullName?.message}</p>
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
                  <textarea {...register('AboutMe', {required: requiredTextInputs})}/>
                  <p>{errors.AboutMe?.message}</p>
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
                <textarea {...register('LookingForAJobDescription', {required: requiredTextInputs})}/>
                <p>{errors.LookingForAJobDescription?.message}</p>
              </>
            }
            </td>
          </tr>
          <tr className={s.blockContacts}
              style={{flexDirection: !props.statusProfile ? 'column' : 'initial'}}
          >
            <td>Contacts</td>
            {contacts.map(contact => {
                return <td key={contact.name} className={s.contacts}>
                  <a href={contact.link} className={s.link}><IconSvg
                    name={contact.name}/>
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

        {!props.statusProfile && <Button name={'save'} disabled={false}/>}
      </form>

    </div>
  );
};

