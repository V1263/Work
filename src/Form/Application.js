import React, { useState } from 'react'

const Application = () => {
    const [data, setdata] = useState({
        userid: "",
        password: "",
        
    });
    const { userid, password } = data;
    const changehandler = () => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }
    const submithandler = () => {
        preventDefault();
        console.log(data)
    }
    return (
        <div>
            <form onSubmit={submithandler}>
                <div>
                    Userid:<span>*</span><input type="text" name="userid" value={userid} placeholder='enter the userid' onChange={changehandler} />
                </div>
                <div>
                    password:<span>*</span><input type="text" name="password" value={password} placeholder='enter the password' onChange={changehandler} />
                </div>
                <div>
                    <input type="submit" name="submit" />
                </div>
            </form>
        </div>
    );
}

export default Application

