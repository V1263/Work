import React, { useState } from 'react';
import './App.css'
import Dashboard from './TASK/Dashboard';
import Popup from './TASK/Popup';


const App = () => {


  const [open, setopen] = useState(false);
  const [render, setRerender] = useState(false);
  const [totalData, totalSetData] = useState(localStorage.getItem('Dashboard') ? JSON.parse(localStorage.getItem('Dashboard')) : [])
  // const totalData = localStorage.getItem('Dashboard') ? JSON.parse(localStorage.getItem('Dashboard')) : [];
  // console.log('locall===>11', totalData);
  const [data, setFormdata] = useState({
    Title: "",
    Description: "",
    Category: "",
    Priority: "",
    Date: "",
    Status: "NotStarted",
    id: totalData?.length + 1
  });

  const changeHandler = e => {
    setFormdata({ ...data, [e.target.name]: e.target.value })
  }

  const submitHandler = e => {
    console.log('onSubmit==>', data, (new Date(data.Date) < new Date()));

    e.preventDefault();
    if (data.Title.length > 200 || !data.Title) {
      alert('Textbox with a maximum of 200 characters');
    }
    else if (!data.Description || data.Description.length <= 0) {
      alert("Description shouldn't be empty");
    }
    else if (!data.Category) {
      alert('Please select an item in category');
    }
    else if (!data.Priority) {
      alert('Please select an item in Priority');
    }
    else if (!data.Date || (new Date(data.Date) < new Date())) {
      alert('Date should be greater than or equal to today date');
    }

    else {
      // const previousData =localStorage.getItem('Dashboard') ?  localStorage.getItem('Dashboard') : []
      // totalData.push(data)
      totalSetData(p => ([...p, data]))
      localStorage.setItem('Dashboard', JSON.stringify([...totalData, data]));
      console.log('locall===>', JSON.stringify(totalData));
      setopen(false)

      setFormdata({
        Title: "",
        Description: "",
        Category: "",
        Priority: "",
        Date: "",
        Status: "NotStarted",
        id: totalData?.length + 1
      })
    }
  }
  const cancelHandler = () => {
    setFormdata({
      Title: "",
      Description: "",
      Category: "",
      Priority: "",
      Date: "",
      Status: "NotStarted",
    });
    setopen(false)
  }
  console.log("submitHandler==>1", totalData)
  console.log("apppppppppp.js")

  return (

    <div className='App'>
      <button className='buttons' onClick={() => setopen(true)}> ADD TICKET </button>
      <Dashboard render={render} setRerender={setRerender} totalData={totalData} totalSetData={totalSetData} useInfo={totalData?.length > 0 ? totalData : []} />

      <form onSubmit={submitHandler}>

        {open && <Popup

          content={

            <div>
              <header className='Main'> <h4>TICKET SYSTEM </h4></header>

              <div className='contanier'>
                <div className='row'>

                  <div className='col-lg-6'>
                    Title : <input name="Title" value={data.Title} onChange={changeHandler} placeholder='Enter the Title Name' type='text' />
                  </div> <br />

                  <div>
                    Description:<textarea name='Description' type='textarea' rows={4} cols={30} value={data.Description} placeholder='Enter the Description' onChange={changeHandler} />
                  </div> <br />

                  <div className='col-lg-6'>
                    Choose Category :<select name='Category' onChange={changeHandler}>
                      <option value="None">None</option>
                      <option value="Lan Issue">Lan Issue</option>
                      <option value="Cable Issue">Cable Issue</option>
                      <option value="Laptop Charger Issue">Laptop Charger Issue</option>
                      <option value="Laptop Battery Issue">Laptop Battery Issue</option>
                    </select>
                  </div> <br />

                  <div className='col-lg-6'>
                    Priority :<input type='radio' name='Priority' value='high' onChange={changeHandler} /><label>High</label>
                    <input type='radio' name='Priority' value='medium' onChange={changeHandler} defaultChecked /><label>Medium </label>
                    <input type='radio' name='Priority' value='low' onChange={changeHandler} /><label>low</label>
                  </div> <br />

                  <div className='col-lg-6'>
                    Due Date:<input type="date" name="Date" value={data.Date} onChange={changeHandler} />
                  </div> <br />

                  <div className='col-lg-6'>
                    <footer className='submit'>
                      <button className='Can' type="submit" onClick={() => cancelHandler()}> Cancel </button>
                      <input className='sub' type="submit" name="submit" /><br />
                    </footer>
                  </div>
                </div>
              </div>

            </div>}
        />}
      </form>

    </div >
  );


}
export default App;