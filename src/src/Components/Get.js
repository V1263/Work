import  Axios  from 'axios'
import React, { Component } from 'react'

export class Get extends Component {
    constructor(props) {
    super(props)
     this.state = {
         posts:[]
     }
    }

    componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/posts')
   .then(response => {
       this.setState({
           posts:response.data
       })
       console.log(response.data)
   })      
  }

    render() {
        const {posts} = this.state 
        return (
            <div>
                <h1> List of posts</h1>{
             posts.map(posts => <div key ={posts.id}> <h3> Title - {posts.title} author- {posts.author} </h3>  </div>)
                }
            </div>
        )
    }
}

export default Get;
