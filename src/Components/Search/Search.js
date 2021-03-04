import React, { Fragment } from "react";
import "./Search.css";

const Search = () => {
    return(
        <Fragment>
            <div className="container-fluid">
                <div className="container">
                    <div className="main-search">
                        <input type="text" name="search" placeholder="Search" />
                        <button>
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
        
    )
}

export default Search