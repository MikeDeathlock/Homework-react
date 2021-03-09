import React from "react";
import { Link } from "react-router-dom";
import "./ContactItem.css";

class ContactItem extends React.Component  {
	// it is a state for local change

	// state = {
	// 	"Avatar": this.props.Avatar,
    //     "Name": this.props.Name,
    //     "Created": this.props.Created,
    //     "Role": this.props.Role,
    //     "Status": this.props.Status,
    //     "Email": this.props.Email,
	// 	"Gender": this.props.Gender
	// }

	// It is a function for local change of Status, but we have commented it. We are going to change Status in global case.
	
	// onStatusChange = () => {
	// 	if(this.state.Status === "Inactive"){
	// 		this.setState({
	// 			"Status": "Active"
	// 		})
	// 	} else if (this.state.Status === "Active"){
	// 		this.setState({
	// 			"Status": "Pending"
	// 		})
	// 	} else if (this.state.Status === "Pending"){
	// 		this.setState({
	// 			"Status": "Banned"
	// 		})
	// 	} else {
	// 		this.setState({
	// 			"Status": "Inactive"
	// 		})
	// 	}
	// }

	render() {		
		const { onStatusChange, onDelete } = this.props;
		const { Avatar, Name, Created, Role, Status, Email, Gender } = this.props;
		const URL = `https://randomuser.me/api/portraits/${Gender}/${Avatar}.jpg`;

		let statusStyle = "badge bg-secondary status";
		switch (Status) {
			case 'Active': statusStyle = "badge bg-success status"; break;
			case 'Banned': statusStyle = "badge bg-danger status"; break;
			case 'Inactive': statusStyle = "badge bg-secondary status"; break;
			case 'Pending': statusStyle = "badge bg-warning status"; break;
		}
		return(
			<tr>
				<td>
					<img src={ URL } alt="" />
					<Link to="/" className="user-link">{Name}</Link>
					<span className="user-subhead">{Role}</span>
				</td>
				<td>
					{Created}
				</td>
				<td className="text-center">
					<span className={statusStyle} onClick={onStatusChange}>{Status}</span>
				</td>
				<td>
					<Link to="/">{Email}</Link>
				</td>
				<td>
					<Link to="/" className="table-link">
						<span className="fa-stack">
							<i className="fa fa-square fa-stack-2x"></i>
							<i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
						</span>
					</Link>
					<Link to="/" className="table-link">
						<span className="fa-stack">
							<i className="fa fa-square fa-stack-2x"></i>
							<i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
						</span>
					</Link>
					<Link to="/" className="table-link danger">
						<span className="fa-stack">
							<i className="fa fa-square fa-stack-2x"></i>
							<i className="fa fa-trash-o fa-stack-1x fa-inverse" onClick={onDelete}></i>
						</span>
					</Link>
				</td>
			</tr>
		)
	}    
}

export default ContactItem