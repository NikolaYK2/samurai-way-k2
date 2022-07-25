import React from "react";
import s from "./MyProfile.module.css";


export const MyProfile = () => {
    return (
        <div className={s.content__profile}>
            <div className={s.content__avatar}>
                < img
                    src="https://media.vanityfair.com/photos/5fb803152104c1cd52169e75/9:16/w_504,h_896,c_limit/mandalorian-siege.jpg"
                    alt=""/>
            </div>
            <div>
                <h2>Nikolaj K.</h2>
                <ul>
                    <li><span>Date of Birth: </span>3 october</li>
                    <li><span>City: </span>Molodechno</li>
                    <li><span>Education: </span>BNTU</li>
                    <li><span>Web Site: </span>HZ</li>
                </ul>
            </div>
        </div>
    );
}
