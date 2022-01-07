import React from 'react'

const Adduser = ({ onAdd }) => {

    const handleonclick = (e) => {
        e.preventDefault();
        onAdd(e.target.name.value, e.target.email.value);
        e.target.name.value = "";
        e.target.email.value = "";
    }
    return (
        <div>
            <form onSubmit={handleonclick}>
                <h3> ADD USER </h3>
                <input placeholder="Name" name="name" />
                <input placeholder="Email" name="email" />
                <button onSubmit={handleonclick}>ADD</button>
                <hr />
            </form>
        </div>
    );
};
export default Adduser;