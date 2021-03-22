import React, { Fragment, useEffect } from "react";
import ContactItem from "./ContactItem/ContactItem";
import { connect } from "react-redux";
import { updateDataBase } from "../../Services/api-service";
import { getAllContacts } from "../../Actions/ContactListActions";



const ContactList = ({ List, getAllContacts}) => {
	useEffect(() => {
		updateDataBase().then(data => {			
			getAllContacts(data)
		})
	})	
	const item = List.map(contact => {
		return (			
			<ContactItem key={contact.Id} Id={contact.Id} Avatar={contact.Avatar} Name={contact.Name} Created={contact.Created} Role={contact.Role} Status={contact.Status} Email={contact.Email} Gender={contact.Gender}/>
		)
	})

	
	

    return(
        <Fragment>
            <div className="container">
                <div className="row">
	                <div className="col-lg-12">
		                <div className="main-box clearfix">
			                <div className="table-responsive">
				                <table className="table user-list">
					                <thead>
						                <tr>
							                <th><span>User</span></th>
							                <th><span>Created</span></th>
							                <th className="text-center"><span>Status</span></th>
							                <th><span>Email</span></th>
							                <th>&nbsp;</th>
						                </tr>
					                </thead>
									<tbody>
										{item.length > 0 ? item : <h2>Contact list is empty</h2>}
									</tbody>                                    
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
        </Fragment>
        
    )
}

const mapStateToProps = ({ContactListReducer}) => {	
	const {List} = ContactListReducer;
	return {List}
}

const mapDispatchToProps = {
    getAllContacts
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
