import React from "react";
import {Nav} from "./Nav";
import "./Main.css";

export const Main =()=>{
    return(
        <main className='main'>
            <Nav/>
            <section className="content">
                <div className="content__wrap">
                    <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt=""/>
                </div>
                <section className="content__data">
                    <div>
                        <div><img src="https://media.vanityfair.com/photos/5fb803152104c1cd52169e75/9:16/w_504,h_896,c_limit/mandalorian-siege.jpg" alt=""/></div>
                        <div></div>
                    </div>
                    <div>
                        My post
                        <div>new post</div>
                    </div>
                    <div>
                        <div>1</div>
                        <div>2</div>
                    </div>
                </section>
            </section>
        </main>
    );
}