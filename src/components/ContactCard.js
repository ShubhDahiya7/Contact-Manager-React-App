import React from "react";

const ContactCard = (props) => {
    return (
        <div className="item">
            <i className="bi bi-person-lines-fill"></i>
            <div className="content">
                <div className="header">{props.contacts.name}</div>
                <div>{props.contacts.email}</div>
            </div>
            {/*<i className="trash alternate outline icon floated right" style={{color: "red",marginTop: "7px"}}></i>*/}

            <div className="ui segment">
                <div className="ui grid">
                    <div className="four wide column">
                        <h3>Contact-{props.contacts.id}</h3>
                    </div>
                    <div className="twelve wide column">
                        <i class="trash icon floated right" style={{color: "red",marginTop: "7px"}}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard