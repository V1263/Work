import React,{useEffect,useState} from 'react'
import axios from 'axios';
const Api = ()=> {
    const [data,setData]=useState([]);
    useEffect(()=>{
        
            // axios.get('https://api.npms.io/v2/search?q=react')
            //     .then(response => this.setState({ totalReactPackages: response.data.total }));
        
        fetch ('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json()
        ).then(json => setData(json))
    } ,[])
    return (
        <div>
         {data.map(item => <li key = {item.id}>{item.body}</li>)}
        </div>
    )
}

export default Api;
