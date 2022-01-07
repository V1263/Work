import React, { useState } from 'react'

const Application = () => {
    const [data, setdata] = useState({
        userid: "",
        password: "",

    });
    const { userid, password } = data;
    const changehandler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }
    const submithandler = (e) => {
        e.preventDefault();
        console.log(data)
    }
    return (
        <div>
            <center>
                <form onSubmit={submithandler}>
                    <div>
                        Userid:<span>*</span><input type="text" name="userid" value={userid} placeholder='enter the userid' onChange={changehandler} />
                    </div><br/>
                    <div>
                        password:<span>*</span><input type="text" name="password" value={password} placeholder='enter the password' onChange={changehandler} />
                    </div><br/>
                    <div>
                        <input type="submit" name="submit" />
                    </div>
                </form>
            </center>
        </div>
    );
}

export default Application;

