import axios from 'axios';
import React, { Component } from 'react'

class Api1 extends Component {
    constructor(props) {
    super(props)

      this.State = { 
          posts:[]
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(Response => {
             console.log(Response)
            this.setState({posts:Response.data})
            
        })
     
    .catch(error => {
        console.log(error)
        // this.setState({errorMsg:'error Data'})
         })
    }
    render() {
        const{posts,errorMsg}=this.State
        return (
            <div>
                List of posts
                {
                    posts.length?
                    posts.map(post => <div key={post.id}>{post.title}</div>):
                    null
                }
                {/* {errorMsg ? <div> {errorMsg} </div> : null} */}
            </div>
        )
    }

}

export default Api1;
