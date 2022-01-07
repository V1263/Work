import React, { useEffect, useState } from 'react'

function Put() {
    const [users, setusers] = useState([]);
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [mobile, setmobile] = useState("");
    const [userid, setuserid] = useState("");
    useEffect(() => {
        getUsers();
    }, [])
    function getUsers() {
        fetch("https://localhost:4000/todo")
            .then((result) => {
                result.json().then((resp) => {
                    setusers(resp)
                    setname(resp[0].name)
                    setmobile(resp[0].mobile)
                    setemail(resp[0].email)
                    setuserid(resp[0].id)
                })
            })
    }

    function deleteUser(id) {
        fetch(`https://localhost:4000/todo/${id}`, {
            method: 'delete'
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
                getUsers()
            })
        })

    }
    function selectUser(id) {
        let item = users[id - 1];
        setname(item.name)
        setemail(item.email)
        setmobile(item.mobile)
        setuserid(item.id)
    }
    return (
        <div className='App'>
            <h1> DATA </h1>
            <table border='1' style={{ float: 'left' }}>
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>NAME</td>
                        <td>EMAIL</td>
                        <td>MOBILE</td>
                        <td>OPERATIONS</td>
                    </tr>
                    {
                        users.map((item, i) =>
                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                <td><button onClick={() => deleteUser(item.id)}>delete</button></td>
                                <td><button onClick={() => selectUser(item.id)}>update</button></td>

                            </tr>
                        )

                    }
                </tbody>
            </table>
            <table>
                <div>
                    <input type="text" value={name} onChange={(e) => { setname(e.target.name) }} /> <br></br>
                    <input type="text" value={email} /> <br></br>
                    <input type="text" value={mobile} /> <br></br>

                    <button> Update User </button>

                </div>
            </table>

        </div>
    )
}

export default Put;
