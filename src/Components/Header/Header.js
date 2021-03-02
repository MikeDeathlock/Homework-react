import React, { Fragment } from "react";
import "./Header.css";

const Header = () => {
    return(
        <Fragment>
            <div className="container-fluid bg-header">
                <div className="container">
                    <div className="main-header">
                        <div className="header-logo">
                            <a href="#">
                                <p className="logo">My<span>REACT</span>site</p>
                            </a>
                        </div>
                        <div className="header-navigation">
                            <ul className="navigation-list">
                                <li><a href="#">Home</a></li>                            
                                <li><a href="#">Category</a></li>                            
                                <li><a href="#">About Us</a></li>                            
                                <li><a href="#">Contacts</a></li>                            
                                <li><a href="#">Log in</a></li>                            
                            </ul>
                        </div>
                    </div>                    
                </div>
            </div>
        </Fragment>    
    )
}

export default Header