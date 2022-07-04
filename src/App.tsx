import React from 'react';
import './App.css';

function App() {
    console.log("App rendering")
    return (
        <div className="wrapper">
            <header className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" alt=""/>
            </header>
            <main className='cont'>
                <aside className='nav'>
                    <nav>
                        <ul>
                            <li>Profile</li>
                            <li>Messages</li>
                            <li>News</li>
                            <li></li>
                        </ul>
                    </nav>
                </aside>
            </main>
            <footer className='foot'></footer>
        </div>
    );
}
export default App;


