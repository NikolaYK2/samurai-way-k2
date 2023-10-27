import s from "features/2-main/content/1-MyProfile/ui/myPost/Post.module.css";
import React, {memo, useCallback} from "react";
import {useAppSelector} from "app/model/redux-store";
import {useDispatch} from "react-redux";
import {deletePostAC, setLikeAC} from "features/2-main/content/1-MyProfile/model/proFilePageReducer";
import {IconSvg} from "common/components/iconSvg/IconSVG";
import {optimizedPostDataSelector, userIdSelector} from "features/2-main/content/1-MyProfile/model/MyProfileSelectors";

const day = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday',];
const data = new Date().getDate()
const number = new Date().getFullYear()
const month = new Date().getMonth() + 1
const dayNumber = new Date().getDay()

export const Post = memo(() => {

  const postData = useAppSelector(optimizedPostDataSelector)
  const dispatch = useDispatch()
  const userId = useAppSelector(userIdSelector)

  const handleDeletePost = (postId: string) => {
    dispatch(deletePostAC(postId))
  }

  const handleLike = useCallback((id: string) => {
    if (userId) dispatch(setLikeAC(userId, id))
  }, [postData])


  const dayWeek = day[dayNumber - 1]
  return (
    <>
      {postData.map(pD => {
        return (
          <div key={pD.id} className={s.containerPost}>
            <div className={s.post}>
              <div className={s.content__profUsers}>
                <div className={s.img}>
                  <img
                    src="https://avatars.mds.yandex.net/i?id=0eaa142d7202ac9bbd26ac279e7ae159_l-4898876-images-thumbs&n=27&h=384&w=480"
                    alt=""/>
                </div>
                <div className={s.postData}>
                  <div className={s.message}>{pD.sms}</div>
                </div>
              </div>
              <div className={s.like}>
                <span onClick={() => handleLike(pD.id)}><IconSvg name={'like'}/>{pD.like}</span>

                <div className={s.delPost} onClick={() => handleDeletePost(pD.id)}><IconSvg name={'delete'}/></div>
              </div>
            </div>

            <div className={s.dataPostContainer}>
              <div className={s.dataPost}>
                <div>{dayWeek}</div>
                <div>{data}/{month}/{number}</div>
              </div>
              <div className={s.psevdoElement}></div>
            </div>
          </div>
        )
      })}
    </>
  )
})
