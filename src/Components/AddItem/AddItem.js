import React, { Fragment } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./AddItem.css";
import { Redirect } from "react-router-dom";
import { saveData } from "../../Services/api-service";
import { connect } from "react-redux";
import { makeNewContact } from "../../Actions/ContactListActions";

class AddItem extends React.Component {

	state ={		
        "Avatar": "",
        "Name": "",
        "Created": "",
        "Role": "",
        "Status": "",
        "Email": "",
		"Gender": "",
		"isRedirect": false
	}

	getAvatar = (event) => {		
		this.setState({
			Avatar: event.target.value
		})
	}

	getName = (event) => {		
		this.setState({
			Name: event.target.value
		})
	}

	getRole = (event) => {		
		this.setState({
			Role: event.target.value
		})
	}

	getStatus = (event) => {		
		this.setState({
			Status: event.target.value
		})
	}

	getEmail = (event) => {		
		this.setState({
			Email: event.target.value
		})
	}

	getGender = (event) => {		
		this.setState({
			Gender: event.target.value
		})
	}

	addNewContact = (event) => {
		event.preventDefault();
		const { Avatar, Name, Email, Status, Role, Gender } = this.state;
		let Created = Date.now();
		const Id = uuidv4();
		const newContact = { Id, Avatar, Name, Email, Status, Role, Gender, Created };
		const { List } = this.props;
		const { makeNewContact } = this.props;		
		List.push(newContact);
		makeNewContact(List);
		saveData(List);
		this.setState({
			isRedirect: true
		})
	}

	render(){
		const { isRedirect } = this.state;
		if (isRedirect) {
			return(
				<Redirect to="/" />
			)
		}		
		return(
			
				<div className="bg-addItem">
					<div className="container">
						<div className="main-addItem">
							<h2>Add new item.</h2>
							<form action="#" onSubmit={this.addNewContact} className="main-add-form">
								<div className="form-action-block">
									<label>Name:</label>
									<input onChange={this.getName} className="add-form-input" type="text" id="name" />
								</div>
								<div className="form-action-block">
									<label>Gender:</label>
									<input onChange={this.getGender}  className="add-form-input" type="text" id="gender"/>
								</div>
								<div className="form-action-block">
									<label>Avatar:</label>
									<input onChange={this.getAvatar} min="1" max="99" className="add-form-input" type="number" id="avatar"/>
								</div>
								<div className="form-action-block">
									<label>Email:</label>
									<input onChange={this.getEmail}  className="add-form-input" type="email" id="email"/>
								</div>
								<div className="form-action-block">
									<label>Role:</label>
									<input onChange={this.getRole} className="add-form-input" type="text" id="role"/>
								</div>
								<div className="form-action-block">
									<label>Status:</label>
									<input onChange={this.getStatus} className="add-form-input" type="text" id="status"/>  
								</div>
								<div className="form-action-button">
									<button type="submit">Add item</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			
		)
	}   
}

const mapStateToProps = ({ ContactListReducer }) => {
	const { List } = ContactListReducer;
	return { List }
}

const mapDispatchToProps = {
    makeNewContact
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem)

