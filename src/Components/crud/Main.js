
import React, { useEffect, useState } from 'react';
import '../../App.css';
import User from './User'
import Adduser from './Adduser';
import User1 from '../crud/User1';

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      })
  }
  const onAdd = async (name, email) => {
    await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email
      }),
      headers: {
        "content-type": "application/json;charset=UTF-8",
      }
    })
      .then((res) => {
        if (res.status !== 201) {
          return
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  const Edit = async (id, name, email) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id, name, email}`, {
      method: 'Update'
    })
      .then((res) => {
        if (res.status !== 200) {
          return
        } else {
          setUsers(users.filter((user) => {
            return user.id !== id;
          }))
        }

      })
      .catch((err) => {
        console.log(err);
      })
  }

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE'
    })
      .then((res) => {
        if (res.status !== 200) {
          return
        } else {
          setUsers(users.filter((user) => {
            return user.id !== id;
          }))
        }

      })
      .catch((err) => {
        console.log(err);
      })
  }

  console.log(users)
  return (
    <div className='App'>
      <h3> CRUD METHOD </h3>
      <br />
      <Adduser onAdd={onAdd} />
      {/* <User1 Edit={id}/> */}
      <div>
        {
          users.map((user) => (
            <User
              id={user.id}
              key={user.id}
              name={user.name}
              email={user.email}
              onDelete={onDelete}
              Edit={Edit}
            />

          ))
        }
      </div>
    </div>
  )
}
export default App;