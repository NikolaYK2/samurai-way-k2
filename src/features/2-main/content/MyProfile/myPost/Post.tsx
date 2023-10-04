import s from "./Post.module.css";
import React from "react";
import {useAppSelector} from "app/redux-store";
import {useDispatch} from "react-redux";
import {deletePostAC} from "features/redux/proFilePageReducer";

export const Post = () => {

  const postData = useAppSelector(state => state.proFilePage.postData)
  const dispatch = useDispatch()

  const handlDeletePost = (postId: string) => {
    dispatch(deletePostAC(postId))
  }


  const data = new Date().getDate()
  const day = new Date().getFullYear()
  const month = new Date().getMonth() + 1
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
                  <div className={s.delPost} onClick={() => handlDeletePost(pD.id)}>x</div>
                </div>
              </div>
              <div className={s.like}>
                <span>like</span>{pD.like}
              </div>
            </div>
            <div className={s.dataPost}>
              <div>{data}/{month}/{day}</div>
            </div>
          </div>
        )
      })}
    </>
  )
}
