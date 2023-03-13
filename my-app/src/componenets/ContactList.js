import React from "react";
import ContactCard from "./ContactCard";


const ContactList = (props) => {
    console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id);
        console.log(id);
    };
    const contacts = [
        {
            id: "1",
            name: "Naveen"
            , email: "Naveen@gamil.com"
        }
    ]
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} ClickHandler={deleteContactHandler}></ContactCard>
        );
    })
    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    );
}

export default ContactList;