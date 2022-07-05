import React from "react";
import "./Nav.css";

export const Nav =()=>{
    return(
        <aside className='nav'>
            <nav className="item">
                <ul>
                    <li><a>Profile</a></li>
                    <li><a>Messages</a></li>
                    <li><a>News</a></li>
                    <li><a>Music</a></li>
                    <br/>
                    <li><a>Settings</a></li>
                </ul>
            </nav>
        </aside>

    );
}