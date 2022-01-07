import axios from 'axios'
import React, { Component } from 'react';


class Post extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userid:'',
            title:'',
            body:''
        }
    }  
    changehandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    submithandler=(e)=>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(Response =>{
            console.log(Response)
        })
        .catch(error => {
            console.log(error)
        })
    }


    render() {
        const {userid,title,body} = this.state
        return (
            <div>
                <form onSubmit ={this.submithandler}  >
                    <div>
                        <input 
                        type="text"
                         name="userid" 
                         value={userid}
                          onChange={this.changehandler}/>
                    </div>
                    <div>
                        <input 
                        type="text" 
                        name="title" 
                        value={title}
                        onChange={this.changehandler} />
                    </div>
                    <div>
                        <input
                         type="text" 
                         name="body"
                          value={body}
                          onChange={this.changehandler} />
                    </div>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
        )
    }
}
export default Post;