import React, {lazy, Suspense} from "react";
import s from "./Main.module.css";
import {Navigate, Route, Routes} from "react-router-dom";
import {Nav} from "features/2-main/Navbar/Nav";
import {News} from "features/2-main/content/4-news/News";
import {Music} from "features/2-main/content/5-music/Music";
import {Settings} from "features/2-main/content/7-settings/Settings";
import {FriendsContainer} from "features/2-main/content/6-friends/FriendsContainer";
import UsersContainer from "features/2-main/content/3-users/UsersContiner";
import {Loading} from "common/components/loading/Loading";

const DialogsMessage = lazy(() => import('features/2-main/content/2-dialogs/DialogsMessage'));
const ProfileContainer = lazy(() => import('features/2-main/content/ui/ContentProfileContainer'));

export const Main = () => {


  return (
    <main className={s.main}>
      <Nav/>
      <div className={s.content}>
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route path="/" element={<Navigate to="/profile" replace/>}/>
            <Route path='/profile' element={<ProfileContainer/>}>
              <Route path=":userId" element={<ProfileContainer/>}/>
            </Route>
            <Route path="/messages/*" element={<DialogsMessage/>}/>
            <Route path="/users/*" element={<UsersContainer/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/music" element={<Music/>}/>
            <Route path="/friends" element={<FriendsContainer/>}/>
            <Route path="/settings" element={<Settings/>}/>
            {/*<Route path="/login" element={<Login/>}/>*/}
            <Route path="*" element={<div>404</div>}/>
          </Routes>
        </Suspense>

      </div>
    </main>
  );
}
