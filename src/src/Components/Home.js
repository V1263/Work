import React, { useState } from 'react';
import {Link } from 'react-router-dom';
// import './App.css';

function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showtext, setshowtext] = useState(false);


  const usernameHandler = (e) => {
    setUsername(e.target.value);
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  }

  return (
    // <form>
    <div>
      <div>
        <label>
          Username :
          <input type="text" value={username} onChange={usernameHandler} />
        </label>
      </div>
      <div>
        <label>
          Password :
          <input type="password" value={password} onChange={passwordHandler} />
        </label>
      </div>
      {/* <Link to={`/new-tab?username=${username}&password=${password}`} target="_blank">Submit</Link> */}
      
      <button onClick={()=>setshowtext(true)}> SUBMIT</button>
      {showtext&&<div>
      <div>
        username:{username}
      </div>
      <div>
        Password:{password}
      </div>
      </div>}
      </div>
    // </form>
  );
}

export default Home;