import React from "react";
import {Nav} from "./Navbar/Nav";
import s from "./Main.module.css";
import {MyPost} from "./myPost/MyPost";
import {Post} from "./post/Post";


const dataMy = [
    {
        id: 1,
        avatar: "https://media.vanityfair.com/photos/5fb803152104c1cd52169e75/9:16/w_504,h_896,c_limit/mandalorian-siege.jpg",
        name: "Nikolaj K.",
        "Date of Birth": "3 october",
        city: "Molodechno",
        education: "BNTU",
        'Web Site': "HZ",
    },
    // {
    //     id: 2,
    //     avatar: "https://tinypng.com/images/social/website.jpg",
    //     name: "Vitalia M.",
    //     "Date of Birth": "17 january",
    //     city: "Molodechno",
    //     education: "MED",
    //     'Web Site': "HZ",
    // },
]


export const Main = () => {
    return (
        <main className={s.main}>
            <Nav/>
            <section className={s.content}>
                <div className={s.content__wrap}>
                    <img
                        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                        alt=""/>
                </div>
                {dataMy.map(eDataMy => {
                    return (
                        <div className={s.content__profile} key={eDataMy.id}>
                            <div className={s.content__avatar}><img src={eDataMy.avatar} alt=""/>
                            </div>
                            <div>
                                <h2>{eDataMy.name}</h2>
                                <ul>
                                    <li><span>Date of Birth: </span>{eDataMy["Date of Birth"]}</li>
                                    <li><span>City: </span>{eDataMy.city}</li>
                                    <li><span>Education: </span>{eDataMy.education}</li>
                                    <li><span>Web Site: </span>{eDataMy["Web Site"]}</li>
                                </ul>
                            </div>
                        </div>
                    );
                })}
                <MyPost/>
                <Post/>
            </section>
        </main>
    );
}