import s from "features/2-main/content/1-MyProfile/ui/myPost/MyPost.module.css";
import React, {memo} from "react";
import {MyPostType} from "features/2-main/content/1-MyProfile/ui/myPost/MyPostContainer";
import {FormTextarea} from "common/components/formTextArea/FormTextArea";
import {Post} from "features/2-main/content/1-MyProfile/ui/myPost/Post";

export const MyPost = memo((props: MyPostType) => {

  console.log('my post')
  //POSTS =====================================================================================

  return (
    <div className={s.continer}>
      <div className={s.content__myPost}>
        <FormTextarea nameBut={'send'} messages={props.postData} addMessages={props.addPost}/>
      </div>
        <Post/>
    </div>
  );
})
//--------------------------------------------------------------------------------------
