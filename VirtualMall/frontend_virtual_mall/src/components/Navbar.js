import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
            <nav className="main-nav">
                { /* logo part */}
                <div className="logo">
                    <h2>
                        <span>V</span>irtual
                        <span>M</span>all
                    </h2>
                </div>
                { /* Menu Part Links */}
                <div className="menu-link">
                    <ul>
                        <li>
                            <a href="/home"> Home  </a>
                        </li>
                        <li>
                            <a href="/about">   </a>
                        </li>
                        <li>
                            <a href="/Services">   </a>
                        </li>
                        <li>
                            <a href="/contact">    </a>
                        </li>
                    </ul>
                </div>
                { /* User Resister Part 
                <div className = "user-resister">
                    <ul>
                        <li>
                            <a href= "/login">Login</a>
                        </li>
                        <li>
                            <a href= "/resister">Resister</a>
                        </li>
                    </ul>
                </div>
            */}
            </nav>

        </>
    );

};

export default Navbar;