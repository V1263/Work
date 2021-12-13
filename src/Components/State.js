import React from 'react'
import { useState } from 'react'
function State() {
    var [name, setname] = useState('giri')

    let [flg, setflg] = useState(false)
    //  name='ttt';
    let handleClick = () => {
        if (name === 'giri') {
            setname('sachin');
        }
        else {
            setname('giri');
        }
        // setflg(!flg)
        setflg(true)

        // setname('oiji9u898');
        setflg(!flg)

    }
    return (
        <div>

            {flg ? 'hello' : 'hiiiii'}

            <h1> {name} </h1>
            <button onClick={handleClick}> State </button>

        </div>
    );
}

export default State;
