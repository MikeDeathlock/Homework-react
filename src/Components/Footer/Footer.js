import React, { Fragment } from "react";
import "./Footer.css";

const Footer = () => {
    return(
        <Fragment>
            <div className="container-fluid bg-footer">
                <div className="container">
                    <div className="footer-navigation">
                        <ul className="footer-list">
                            <li><a href="#">Home</a></li>                                                     
                            <li><a href="#">About Us</a></li>                            
                            <li><a href="#">Contacts</a></li>                      
                        </ul>
                    </div>
                    <div className="footer-links">
                        <a href="#"><i class="fa fa-twitter-square"></i></a>
                        <a href="#"><i class="fa fa-facebook-square"></i></a>
                        <a href="#"><i class="fa fa-telegram"></i></a>
                    </div>
                    <div className="bottom-footer">
                        <p>Created by Myself <a href="#">MyREACTsite.com</a></p>
                    </div>
                </div>
            </div>
        </Fragment>        
    )
}

export default Footer