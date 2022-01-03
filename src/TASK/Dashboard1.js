import React, { useState } from 'react';


const Dashboard = ({ useInfo }) => {
  console.log("Dashboard", useInfo);
  const [status, setStatus] = useState("Not Started");
  const [index, setIndex] = useState();
  const [data, setdata] = useState({
    Notstarted: useInfo.length && 0,
    Inprogress: 0,
    Resolved: 0,
    Closed: 0
  });

  const { Notstarted, Inprogress, Resolved, Closed } = data;
  const changeHandler = (e) => {
    setStatus({ ...data, [e.target.name]: e.target.value });
  };

  const changeTheState = (x, item, i) => {
    setIndex(i);
    if (x === "Notstarted") {
      setStatus(x);
      setdata((p) => ({
        ...p,
        Notstarted: useInfo.length - 1

      }));
    }
    if (x === "Inprogress") {
      setStatus(x);
      setdata((p) => ({
        ...p,
        Notstarted: useInfo.length - 1,
        Inprogress: p.Inprogress + 1
      }));
    }
    if (x === "Resolved") {
      setStatus(x);
      setdata((p) => ({
        ...p,
        Inprogress: p.Inprogress - 1,
        Resolved: p.Resolved + 1
      }));
    }
    if (x === "Closed") {
      setStatus(x);
    }
    if (x === "remove") {
      setStatus("Not Started");
      setdata((p) => ({
        ...p,
        Resolved: p.Resolved - 1,
        Closed: p.Closed + 1
      }));
      const index = useInfo.indexOf(item);
      // console.log("iiiiiii==>", x, index)
      useInfo.splice(index, 1);
      if (index !== -1) localStorage.setItem("Dashboard", JSON.stringify(useInfo));
    }
  };
  return (
    <div className="Dashboard">
      <h1>TICKET SYSTEM</h1>
      {/* onSubmit={submitHandler} */}
      <form>
        <label>Notstarted :</label>{" "}
        <input
          type="text"
          name="Notstarted"
          onChange={changeHandler}
          value={Notstarted}
        />
        <label>In Progress :</label>{" "}
        <input
          type="text"
          name="Inprogress"
          onChange={changeHandler}
          value={Inprogress}
        />
        <label>Resolved :</label>{" "}
        <input
          type="text"
          name="Resolved"
          onChange={changeHandler}
          value={Resolved}
        />
        <label>Closed :</label>{" "}
        <input
          type="text"
          name="Closed"
          onChange={changeHandler}
          value={Closed}
        />
        {/* <input type="submit" name="submit" /><br /> */}
      </form>

      {/* <button>Add</button> */}
      <div className="Table">
        <center>
          <table border="4">
            <tr>
              <th>TICKET ID</th>
              <th>TITLE</th>
              <th>CATEGORY</th>
              <th>PRIORITY</th>
              <th>DUE DATE</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
            {useInfo.map((item, i) => (
              <tr key={i}>
                <td>{i}</td>
                <td>{item.Title}</td>
                <td>{item.Category}</td>
                <td>{item.Priority}</td>
                <td>{item.Date}</td>
                <td>{index === i ? status : "Not Started"}</td>
                <td>
                  {" "}
                  {index === i && status === "Not Started" ? (
                    <button
                      onClick={() => changeTheState("Inprogress", item, i)}
                    >
                      Inprogress
                    </button>
                  ) : status === "Inprogress" && index === i ? (
                    <button onClick={() => changeTheState("Resolved", item, i)}>
                      Resolve
                    </button>
                  ) : status === "Resolved" && index === i ? (
                    <button onClick={() => changeTheState("remove", item, i)}>
                      Close
                    </button>
                  ) : (
                    <button
                      onClick={() => changeTheState("Inprogress", item, i)}
                    >
                      Start
                    </button>
                  )}
                </td>

                {/*                                    
                                   
                                    {status === 'Inprogess' && index === i && <td>  <button onClick={() => changeTheStatu('Resolved', item, i)}>Inprogess</button></td>}
                                    {status === 'Resolved' && index === i && <td>  <button onClick={() => changeTheStatu('Closed', item, i)}>Resolved</button></td>}
                                    {status === 'Closed' && index === i && <td>  <button onClick={() => changeTheStatu('remove', item, i)}>Closed</button></td>} */}

                {/* <td><button onClick={() => changeTheStatu(i)}>Inprogess</button></td>
                                    <td><button onClick={() => changeTheStatu(i)}>Resolved</button></td>
                                    <td><button onClick={() => changeTheStatu(i)}>Closed</button></td> */}
              </tr>
            ))}
          </table>
        </center>
      </div>
    </div>
  );
};

export default Dashboard