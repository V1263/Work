import React, { useState } from 'react';
import Popup from './Popup';

const Dashboard = ({ useInfo, totalSetData, totalData, render, setRerender }) => {
    const user = useInfo?.filter(x => x.Status !== 'Closed')
    console.log("Dashboard", useInfo);
    const [status, setStatus] = useState();
    // const [index, setIndex] = useState({});

    var myData = {
        Notstarted: useInfo?.filter(x => x.Status === 'NotStarted')?.length,
        Inprogress: useInfo?.filter(x => x.Status === 'Inprogress')?.length,
        Resolved: useInfo?.filter(x => x.Status === 'Resolved')?.length,
        Closed: useInfo?.filter(x => x.Status === 'Closed')?.length,
    }

    const [data, setdata] = useState(myData)
    const [ticketData, updateticketData] = useState({
        Title: " ",
        Description: " ",
        Category: " ",
        Priority: " ",
        Date: " ",
    });

    const [model, openModel] = useState(false);
    let { Notstarted, Inprogress, Resolved, Closed } = myData;


    const changeTheState = (x, item) => {

        if (x === 'Inprogress') {

            setStatus(x)
            const userItem = { ...item, Status: "Inprogress" }
            const index = useInfo.indexOf(item);
            if (index !== -1) {
                useInfo.splice(index, 1, userItem)
                localStorage.setItem("Dashboard", JSON.stringify(useInfo));
                totalSetData(useInfo);
                setRerender(!render)
            }

        }

        if (x === 'Resolved') {

            setStatus(x)
            const userItem = { ...item, Status: "Resolved" }
            const index = useInfo.indexOf(item);
            if (index !== -1) {
                useInfo.splice(index, 1, userItem)
                console.log('serfesrrs111', useInfo, index);
                localStorage.setItem("Dashboard", JSON.stringify(useInfo));
                totalSetData(useInfo);
            }

        }

        if (x === 'Closed') {
            Closed = Closed + 1;
            setStatus(x)
            const userItem = { ...item, Status: "Closed" }
            const index = useInfo.indexOf(item);
            if (index !== -1) {
                useInfo.splice(index, 1, userItem)
                localStorage.setItem("Dashboard", JSON.stringify(useInfo));
                useInfo.splice(index, 1, userItem);
                totalSetData(useInfo);
            }

        }
    }

    const editUserData = (item) => {
        console.log("item==>", item)
        openModel(true)
        updateticketData({
            Title: item.Title,
            Description: item.Description,
            Category: item.Category,
            Priority: item.Priority,
            Date: item.Date
        })
    }

    const changeHandler = (e) => {
        console.log('submit', e.target.name);
        updateticketData({ ...ticketData, [e.target.name]: e.target.value })

    }
    const submitted = (e) => {
        e.preventDefault();
        let totalUsersData = localStorage.getItem('Dashboard') ? JSON.parse(localStorage.getItem('Dashboard')) : [];
        const index = totalUsersData.splice(x => x.id === ticketData.id);
        if (index !== -1) {
            totalUsersData.splice(index, 1, ticketData)
            console.log('serfesrrs11', totalUsersData, index);
            localStorage.setItem("Dashboard", JSON.stringify(totalUsersData));
        }

        openModel(false)
    }
    console.log("dashBoard==>11111", data, myData)
    return (
        <div className='Dashboard'>
            <h1>TICKET SYSTEM</h1>

            <form className='length'>
                <label>Notstarted :</label>  {Notstarted} <br />
                <label>In Progress : </label> {Inprogress} <br />
                <label>Resolved :</label> {Resolved} <br />
                <label>Closed :</label> {Closed}

                {/* <input type="submit" name="submit" /><br /> */}

            </form>

            {/* <button>Add</button> */}
            <div className='Table'>
                <center>
                    <table border='4'>
                        <tr>
                            <th>TICKET ID</th>
                            <th>TITLE</th>
                            <th>CATEGORY</th>
                            <th>PRIORITY</th>
                            <th>DUE DATE</th>
                            <th>STATUS</th>
                            <th>ACTIONS</th>

                        </tr>
                        {
                            user.map((item, i) =>
                                <tr key={i}>{console.log('serfesrrs', item)}
                                    <td>{i}</td>
                                    <a className='link' onClick={() => editUserData(item)}> <td>{item.Title}</td></a>
                                    <td>{item.Category}</td>
                                    <td>{item.Priority}</td>
                                    <td>{item.Date}</td>
                                    <td>{item.Status}</td>
                                    <td> {(item.Status === 'NotStarted') ? <button onClick={() => changeTheState('Inprogress', item, i)}>Start</button> :
                                        (item.Status === 'Inprogress') ? <button onClick={() => changeTheState('Resolved', item, i)}>Resolved</button>
                                            : (item.Status === 'Resolved') ? <button onClick={() => changeTheState('Closed', item, i)}>Closed</button> :
                                                // (item.Status === 'Closed') ? <button onClick={() => changeTheState('remove', item, i)}>remove</button>
                                                <button onClick={() => changeTheState('Inprogress', item, i)}>Start</button>}</td>


                                </tr>
                            )

                        }
                    </table>
                </center>
            </div>
            <form onSubmit={submitted}>
                {model && <Popup

                    content={
                        <div>
                            <header className='main'> <h4>TICKET SYSTEM </h4></header>

                            <div className='contanier'>
                                <div className='row'>

                                    <div className='col-lg-6'>
                                        Title : <input name="Title" value={ticketData.Title} onChange={changeHandler} type='text' />
                                    </div> <br />

                                    <div>
                                        Description:<textarea name='Description' value={ticketData.Description} onChange={changeHandler} type='textarea' rows={4} cols={30} />
                                    </div> <br />

                                    <div className='col-lg-6'>
                                        Choose Category :<select name='Category' value={ticketData.Category} onChange={changeHandler} >
                                            <option value="None">None</option>
                                            <option value="Lan Issue">Lan Issue</option>
                                            <option value="Cable Issue">Cable Issue</option>
                                            <option value="Laptop Charger Issue">Laptop Charger Issue</option>
                                            <option value="Laptop Battery Issue">Laptop Battery Issue</option>
                                        </select>
                                    </div> <br />

                                    <div className='col-lg-6'>
                                        Priority :<input type='radio' name='Priority' defaultChecked={ticketData.Priority === 'high'} value='High' /><label>High </label>
                                        {console.log('hig', ticketData.Priority)}
                                        <input type='radio' name='Priority' defaultChecked={ticketData.Priority === 'medium'} value='Medium' /><label>Medium </label>
                                        <input type='radio' name='Priority' defaultChecked={ticketData.Priority === 'low'} value='low' /><label>low</label>
                                    </div> <br />

                                    <div className='col-lg-6'>
                                        Due Date:<input type="date" value={ticketData.Date} onChange={changeHandler} name="Date" />
                                    </div> <br />

                                    <div className='col-lg-6'>
                                        <footer className='submit'>
                                            <button className='Can' type="submit" onClick={() => openModel(false)} > Cancel </button>
                                            <input className='sub' type="submit" name="submit" /><br />
                                        </footer>
                                    </div>
                                </div>
                            </div>

                        </div>
                    }
                />}
            </form>
        </div>
    );
}


export default Dashboard;