import React from 'react';
import ContactCard from "./ContactCard";

        const ContactList = (props) => {

            const renderContactList = props.contacts.map((contacts) => {
                return (
                 <ContactCard contacts={contacts}/>
                )
            })
            return (
                    <div className="ui celled list">{renderContactList}</div>
            )
        // rendercontactlist is a function which we will use in curvy brackets below

}

export default ContactList

