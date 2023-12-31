import React from 'react';

export default function AddContact() {
    return (
        <>
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form">
                   <div className="field">
                       <label>Name</label>
                       <input type="text" name="name" placeholder="Name"/>
                   </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email"/>
                    </div>
                    <h2 className="ui container center aligned">Add Contact</h2>
                    <button className="ui extra large button green">Add</button>
                </form>
            </div>
        </>
    )
}
