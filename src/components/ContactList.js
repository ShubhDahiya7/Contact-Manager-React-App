import React from 'react';

export default function ContactList(props) {

        // rendercontactlist is a function which we will use in curvy brackets below
        const renderContactList = props.contacts.map((contacts) =>
            <div className="item">
                <div className="content">
                    <div className="header">{contacts.name}</div>
                    <div>{contacts.email}</div>
                </div>
                <i className="trash alternate outline icon"></i>
            </div>
        );
    return (
        <>
            <div className="ui celled list">{renderContactList}</div>
        </>
    )
}

