import React, { useState } from 'react'

const Application = () => {
    const [data, setdata] = useState({
        userid: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const { userid, email, password,confirmPassword } = data;
    const changehandler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }
    const submithandler = (e) => {
        e.preventDefault();
        if(password===confirmPassword){
            console.log(data)
        }
        else {
        console.log('password is not matching')}
        
    }
    return (
        <div>
            <center>
                <form onSubmit={submithandler}>
                    <div>
                        Userid:<span>*</span><input type="text" name="userid" value={userid} placeholder='enter the userid' onChange={changehandler} />
                    </div><br />
                    <div>
                        email:<span>*</span><input type="text" name="email" value={email} placeholder='enter the email' onChange={changehandler} />
                    </div><br />
                    <div>
                        password:<span>*</span><input type="text" name="password" value={password} placeholder='enter the password' onChange={changehandler} />
                    </div><br />
                    <div>
                    confirmPassword:<span>*</span><input type="text" name="confirmPassword" value={confirmPassword} placeholder='enter the confirmPassword' onChange={changehandler} />
                    </div><br />
                    <div>
                        <input type="submit" name="submit" />
                    </div>
                </form>
            </center>
        </div>
    );
}

export default Application;

