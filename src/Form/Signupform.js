import React, { useEffect, useState } from 'react'
import Valid from './Valid';

const Signupform = ({submitForm}) => {

    const [values, setvalues] = useState({
        fullName: "",
        email: "",
        password: "",
        mobile: "",

    });
    const [errors, seterrors] = useState({});
    const [dataiscorrect,setdataiscorrect] = useState(false);

    const { fullName, email, password, mobile } = values;
    const handlechange = (e) => {
        setvalues({
            ...values, [e.target.name]: e.target.value
        })
    }
    const handleformsubmit = (e) => {
        e.preventDefault();
        seterrors(Valid(values));
        setdataiscorrect(true);
    }
    useEffect(()=>{
        if( Object.keys(errors).length===0 && dataiscorrect)
        submitForm(true)
    })
    return (
        <div className='container'>
            <div className='app-wrapper'>
                <div>
                    <h2 className='title'>create account</h2>

                    <form className='form-wrapper'>
                        <div className="name">
                            <label className="label">Full Name</label>
                            <input className="input" type="text" name="fullName" value={fullName} onChange={handlechange} />
                            {errors.fullName && <p className='errors'>{errors.fullName}</p>}
                        </div>
                        <div className="name">
                            <label className="label">Mobile number</label>
                            <input className="input" type="text" name="mobile" value={mobile} onChange={handlechange} />
                            {errors.mobile && <p className='errors'>{errors.mobile}</p>}
                        </div>
                        <div className="name">
                            <label className="label">email</label>
                            <input className="input" type="email" name="email" value={email} onChange={handlechange} />
                            {errors.email && <p className='errors'>{errors.email}</p>}
                        </div>
                        <div className="name">
                            <label className="label">password</label>
                            <input className="input" type="password" name="password" value={password} onChange={handlechange} />
                            {errors.password && <p className='errors'>{errors.password}</p>}

                        </div>
                        <div>
                            <button className='submit' onClick={handleformsubmit}>signup</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signupform;
