import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Header.css";



const Header = ({ onInputChange }) => {

    return(
        <Fragment>
            <div className="container-fluid bg-header">
                <div className="container">
                    <div className="main-header">
                        <div className="header-logo">
                            <Link to="/">
                                <p className="logo">My<span>REACT</span>site</p>
                            </Link>
                        </div>
                        <div className="header-navigation">
                            <ul className="navigation-list">
                                <li><Link to="/">Home</Link></li>                            
                                <li><Link to="/">Category</Link></li>                            
                                <li><Link to="/">About Us</Link></li>                            
                                <li><Link to="/add-item">Add Item</Link></li>                            
                                <li><Link to="/">Log in</Link></li>                            
                            </ul>
                        </div>
                        <div className="header-search">
                            <input type="text" name="search" placeholder="Search" onChange={onInputChange} />                        
                        </div>
                    </div>                    
                </div>
            </div>
        </Fragment>    
    )
}

export default Header