import s from "./MyPost.module.css";
import React from "react";
import {MyPostType} from "features/2-main/content/MyProfile/myPost/MyPostContainer";
import {FormTextarea} from "common/components/formTextArea/FormTextArea";
import {Post} from "features/2-main/content/MyProfile/myPost/Post";

export const MyPost = (props: MyPostType) => {


  //POSTS =====================================================================================

  return (
    <div className={s.continer}>
      <div className={s.content__myPost}>
        <FormTextarea messages={props.postData} addMessages={props.addPost}/>
      </div>
        <Post/>
    </div>
  );
}
//--------------------------------------------------------------------------------------
