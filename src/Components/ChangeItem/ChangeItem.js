import React, { Fragment } from "react";
import "./ChangeItem.css";
import { Redirect } from "react-router-dom";


class ChangeItem extends React.Component {

	state ={
		"Id": this.props.currentContact.Id,
        "Avatar": this.props.currentContact.Avatar,
        "Name": this.props.currentContact.Name,
        "Created": this.props.currentContact.Created,
        "Role": this.props.currentContact.Role,
        "Status": this.props.currentContact.Status,
        "Email": this.props.currentContact.Email,
		"Gender": this.props.currentContact.Gender,
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

	addEditContact = (event) => {
		event.preventDefault();
		const { Id, Avatar, Name, Created, Email, Status, Role, Gender } = this.state;		
		const editContact = { Id, Avatar, Name, Email, Status, Role, Gender, Created };
		const { editContacts } = this.props;
		editContacts(editContact);
		this.setState({
			isRedirect: true
		})
	}

	
	render(){
		const { Avatar, Name, Email, Status, Role, Gender } = this.state;
		const { isRedirect } = this.state;
		if (isRedirect) {
			return(
				<Redirect to="/" />
			)
		}	
		return(
			<Fragment>
				<div className="container-fluid bg-addItem">
					<div className="container">
						<div className="main-addItem">
							<h2>Change Item.</h2>
							<form action="#" onSubmit={this.addEditContact} className="main-add-form">
								<div className="form-action-block">
									<label>Name:</label>
									<input onChange={this.getName} className="add-form-input" type="text" id="name" placeholder={Name} />
								</div>
								<div className="form-action-block">
									<label>Gender:</label>
									<input onChange={this.getGender} className="add-form-input" type="text" id="gender" placeholder={Gender}/>
								</div>
								<div className="form-action-block">
									<label>Avatar:</label>
									<input onChange={this.getAvatar} min="1" max="99" className="add-form-input" type="number" id="avatar" placeholder={Avatar}/>
								</div>
								<div className="form-action-block">
									<label>Email:</label>
									<input onChange={this.getEmail} className="add-form-input" type="email" id="email" placeholder={Email}/>
								</div>
								<div className="form-action-block">
									<label>Role:</label>
									<input onChange={this.getRole} className="add-form-input" type="text" id="role" placeholder={Role}/>
								</div>
								<div className="form-action-block">
									<label>Status:</label>
									<input onChange={this.getStatus} className="add-form-input" type="text" id="status" placeholder={Status}/>  
								</div>
								<div className="form-action-button">
									<button type="submit">Add item</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</Fragment>
		)
	}   
}

export default ChangeItem

