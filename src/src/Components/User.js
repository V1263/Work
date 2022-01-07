import React from 'react'
import './User.css'

const User = ({ id, email, name, onDelete }) => {

    const handleDelete = () => {
        
        onDelete(id);
    }


    return (
        <div className='list'>
            <span>{name}</span>
            <span>{email}</span>
            <span>
                <button> EDIT </button>
                <button onClick={handleDelete}> DELETE </button>
            </span>
        </div>
    )
}
export default User; 