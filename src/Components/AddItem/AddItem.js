import React, { Fragment } from "react";
import "./AddItem.css";

const AddItem = () => {
    return(
        <Fragment>
			<div className="container-fluid bg-addItem">
        		<div className="container">
            		<div className="main-addItem">
                		<h2>Add new item.</h2>
                		<form action="#" method="POST" className="main-add-form">
                    		<div className="form-action-block">
                        		<label for="name">Name:</label>
                        		<input className="add-form-input" type="text" id="name"/>
                    		</div>
                    		<div className="form-action-block">
                        		<label for="gender">Gender:</label>
                        		<input className="add-form-input" type="text" id="gender"/>
                    		</div>
                    		<div className="form-action-block">
                        		<label for="avatar">Avatar:</label>
                        		<input className="add-form-input" type="number" id="avatar"/>
                    		</div>
                    		<div className="form-action-block">
                        		<label for="email">Email:</label>
                        		<input className="add-form-input" type="email" id="email"/>
                    		</div>
                    		<div className="form-action-block">
                        		<label for="role">Role:</label>
                        		<input className="add-form-input" type="text" id="role"/>
                    		</div>
                    		<div className="form-action-block">
                        		<label for="status">Status:</label>
                        		<input className="add-form-input" type="text" id="status"/>  
                    		</div>
                    		<div className="form-action-button">
                        		<button>Add item</button>
                    		</div>
                		</form>
            		</div>
        		</div>
    		</div>
        </Fragment>
    )
}

export default AddItem

