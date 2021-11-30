import React from 'react'
import "./Header.css"
import vesti from "../images/vesti.svg"





function Header() {
    return (
        <div className=" header">
            <div className="header-logo">
                <img src={vesti} alt="" />
            </div>
            <div className="header-list">
                <a href="#home">Home</a>
            </div>
            <div className="header-list">
                <a href="#about">About</a>
            </div>
            <div className="header-list">
                <a href="#fees">Fees</a>
            </div>
            <div className="header-list">
                <a href="#faqs">FAQs</a>
            </div>
            <div className="header-list">
                <a href="#support">Support</a>
            </div>
            <div className="header-list">
                <a href="#migration">Migration Fries</a>
            </div>
            <div className="header-list">
                <a className="green" href="#signin">Sign In</a>
            </div>
                
            
                <button>
                    Join For Free
                </button>
            </div>
    )
}

export default Header
