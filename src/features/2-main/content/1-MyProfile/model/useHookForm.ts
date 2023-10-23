import {useAppDispatch, useAppSelector} from "app/redux-store";
import {myIdSelector} from "features/0-auth/model/authSelectors";
import {optimizedProfileSelect} from "features/2-main/content/1-MyProfile/model/MyProfileSelectors";
import {SubmitHandler, useForm} from "react-hook-form";
import {UpdProfileType} from "features/2-main/content/1-MyProfile/api/profileApi";
import {updUserProfileThunkCreator} from "features/2-main/content/1-MyProfile/model/proFilePageReducer";
import {useEffect} from "react";

type Props = {
  statusProfile: boolean
  setStatusProfile: (status: boolean) => void
}

export const useHookForm = (props: Props) => {
  const myId = useAppSelector(myIdSelector)
  const profile = useAppSelector(optimizedProfileSelect)
  const dispatch = useAppDispatch();

  const {register, handleSubmit, formState: {errors, isSubmitting}, reset} = useForm<UpdProfileType>({
    defaultValues: {
      userId: myId || undefined,
      lookingForAJob: profile?.lookingForAJob,
      lookingForAJobDescription: profile?.lookingForAJobDescription,
      fullName: profile?.fullName,
      aboutMe: profile?.aboutMe || undefined,
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

  const onSubmit: SubmitHandler<UpdProfileType> = data => {
    if (myId) {
      try {
        dispatch(updUserProfileThunkCreator(data))
        props.setStatusProfile(true)
      } catch (e: any) {
        props.setStatusProfile(false)
      }
    }
  }

  useEffect(() => {
    reset({
      ...profile,
      lookingForAJobDescription: profile?.lookingForAJobDescription,
      fullName: profile?.fullName,
      aboutMe: profile?.aboutMe || undefined,
    })

  }, [profile, reset]);

  return {handleSubmit, onSubmit, profile, register, errors, isSubmitting}
}