import React from 'react'
import './User.css'

const User1 = ({   id,email, name,Edit }) => {

    const handleEdit = () => {
        Edit(id);
    }


    return (
        <div className='list'>
            <span>{name}</span>
            <span>{email}</span>
            <span>
                <button onClick={handleEdit}> EDIT </button>
                <button > DELETE</button>
            </span>
        </div>
    )
}
export default User1; 