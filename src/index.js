import React, {Fragment, Component} from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Router
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";

// import uuid
import { v4 as uuidv4 } from 'uuid';

// Components
import Header from "./Components/Header/Header";
import ContactList from "./Components/ContactList/ContactList";
import AddItem from "./Components/AddItem/AddItem";
import ChangeItem from "./Components/ChangeItem/ChangeItem";
import Footer from "./Components/Footer/Footer";
import Page404 from "./Components/Page404/Page404";

class App extends Component {
  state = {
    List: [
      {
        "Id": uuidv4(),
        "Avatar": "66",
        "Name": "Mila Kunis",
        "Created": "2013/08/08",
        "Role": "Admin",
        "Status": "Inactive",
        "Email": "mila@kunis.com",
        "Gender": "women"
      },
      {
        "Id": uuidv4(),
        "Avatar": "7",
        "Name": "Camil Jonson",
        "Created": "2013/08/16",
        "Role": "User",
        "Status": "Active",
        "Email": "camil@jonson.com",
        "Gender": "men"
      },
      {
        "Id": uuidv4(),
        "Avatar": "3",
        "Name": "George Clooney",
        "Created": "2013/08/12",
        "Role": "User",
        "Status": "Active",
        "Email": "marlon@brando.com",
        "Gender": "men"
      },
      {
        "Id": uuidv4(),
        "Avatar": "23",
        "Name": "Emma Watson",
        "Created": "2004/01/24",
        "Role": "User",
        "Status": "Pending",
        "Email": "humphrey@bogart.com",
        "Gender": "women"
      },
      {
        "Id": uuidv4(),
        "Avatar": "9",
        "Name": "Robert Downey Jr",
        "Created": "2013/12/31",
        "Role": "User",
        "Status": "Active",
        "Email": "spencer@tracy.com",
        "Gender": "men"
      },
      {
        "Id": uuidv4(),
        "Avatar": "77",        
        "Name": "Ryan Gossling",
        "Created": "2013/03/03",
        "Role": "User",
        "Status": "Banned",
        "Email": "jack@nicholson.com",
        "Gender": "men"
      }
    ],
    currentContact: ""
  }

  onDelete = (Id) => {
    const index = this.state.List.findIndex((elem) => elem.Id === Id );
    const partOne = this.state.List.slice(0, index);
    const partTwo = this.state.List.slice(index + 1);
    const newList = [...partOne, ...partTwo];
    this.setState(() => {
      return {
        List: newList,
      };
    });    
  }

  onEdit = (Id) => {
    const index = this.state.List.findIndex((elem) => elem.Id === Id );
    let newList = this.state.List.slice();    
    this.setState(() => {
      return {
        currentContact: newList[index],
      };
    });  
  }

  editContacts = (editContact) => {    
    const tmpList = this.state.List.slice();
    console.log(tmpList)
    for(let i = 0; i < tmpList.length; i++) {
      if(tmpList[i].Id === editContact.Id){
        tmpList[i] = editContact;
        this.setState(() => {
          return {
            List: tmpList
          }
        })
      }  
    }
  } 

  onStatusChange = (Id) =>{    
    const index = this.state.List.findIndex((elem) => elem.Id === Id );
    let newList = this.state.List.slice();
    if(newList[index].Status === "Inactive"){
      newList[index].Status = "Active";
    } else if (newList[index].Status === "Active") {
      newList[index].Status = "Pending";
    } else if (newList[index].Status === "Pending") {
      newList[index].Status = "Banned";
    } else {
      newList[index].Status = "Inactive";
    }
    this.setState(() => {
      return {
        List: newList
      }
    })    
  }

  onAddContact = (newContact) => {
    const tmpList = this.state.List.slice();
    const newList = [...tmpList, newContact];
    this.setState(() => {
      return {
        List: newList
      }
    })
  }

  

  render(){
    const { List, currentContact } = this.state;
    return(                      
        <Router>
          <Header />         
            <Switch>
              <Route path="/" exact render={() => <ContactList List={List} currentContact={currentContact} onStatusChange={this.onStatusChange} onDelete={this.onDelete} onEdit={this.onEdit}  />} />
              <Route path="/add-item" exact render={() => <AddItem onAddContact={this.onAddContact} />}/>
              <Route path="/change-item" exact render={() => <ChangeItem currentContact={currentContact} onEdit={this.onEdit} editContacts={this.editContacts} />}/>
              <Route render={() => <Page404 />}/>   
            </Switch>
          <Footer />
        </Router>              
    )
  }  
}

ReactDOM.render(<App />, document.getElementById("root"));

