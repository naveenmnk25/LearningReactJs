import React, { useState, useEffect } from "react";
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import { uuid } from "uuidv4";


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log("addContactHandler", contact);
    //setContacts([...contacts, { id: uuid(), ...contact }])
    setContacts([...contacts, contact]);
  };
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList)
  }

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) {
      console.log("retriveContacts", retriveContacts);
      setContacts(retriveContacts);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts]);
  return (
    <div className="ui container">
      {/* <Router> */}
      <Header />
      {/* <Route path="/add" component={AddContact} /> */}
      {/* <Route path="/" component={ContactList} /> */}
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
      {/* </Router> */}
    </div>

  );
}

export default App;
