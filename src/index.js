import React, {Fragment, Component} from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Components
import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
import ContactList from "./Components/ContactList/ContactList";
import Footer from "./Components/Footer/Footer";

class App extends Component {

  state = {
    List: [
      {
        "Avatar": "https://bootdey.com/img/Content/avatar/avatar3.png",
        "Name": "Mila Kunis",
        "Created": "2013/08/08",
        "Role": "Admin",
        "Status": "Inactive",
        "Email": "mila@kunis.com"
      },
      {
        "Avatar": "https://bootdey.com/img/Content/avatar/avatar2.png",
        "Name": "Camil Jonson",
        "Created": "2013/08/16",
        "Role": "User",
        "Status": "Active",
        "Email": "camil@jonson.com"
      },
      {
        "Avatar": "https://bootdey.com/img/Content/avatar/avatar1.png",
        "Name": "George Clooney",
        "Created": "2013/08/12",
        "Role": "User",
        "Status": "Active",
        "Email": "marlon@brando.com"
      },
      {
        "Avatar": "https://bootdey.com/img/Content/avatar/avatar8.png",
        "Name": "Emma Watson",
        "Created": "2004/01/24",
        "Role": "User",
        "Status": "Inactive",
        "Email": "humphrey@bogart.com"
      },
      {
        "Avatar": "https://bootdey.com/img/Content/avatar/avatar7.png",
        "Name": "Robert Downey Jr",
        "Created": "2013/12/31",
        "Role": "User",
        "Status": "Active",
        "Email": "spencer@tracy.com"
      },
      {
        "Avatar": "https://bootdey.com/img/Content/avatar/avatar4.png",
        "Name": "Ryan Gossling",
        "Created": "2013/03/03",
        "Role": "User",
        "Status": "Banned",
        "Email": "jack@nicholson.com"
      }
    ]
  }

  render(){
    const { List } = this.state;
    return(
      <Fragment>
        <Header />
        <Search />
        <ContactList List={List} />
        <Footer />
      </Fragment>    
    )
  }  
}

ReactDOM.render(<App />, document.getElementById("root"));

