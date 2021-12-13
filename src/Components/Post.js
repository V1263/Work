import React, { Component } from 'react'
import Axios from 'axios';

export class Post extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // userid: '',
            title: '',
            author: ''
        }
    }
    handlechange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handlesubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        Axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
          .then(response => {

                console.log(response)
        })

    }
    render() {
        const { title, author } = this.state
        return (
            <div>
                <form onSubmit={this.handlesubmit}>
                    {/* <div>
                        <label> USER ID :</label>
                        <input
                            type='text'
                            name='userid'
                            value={userid}
                            onChange={this.handlechange}
                        ></input>
                    </div> */}
                    <div>
                        <label> TITLE :</label>
                        <input
                            type='text'
                            name='title'
                            value={title}
                            onChange={this.handlechange}
                        ></input>
                    </div>
                    <div>
                        <label> author :</label>
                        <input
                            type='text'
                            name='author'
                            value={author}
                            onChange={this.handlechange}
                        ></input>
                    </div>
                    {/* <div>
                        <label> AGE :</label>
                        <input
                            type='text'
                            name='age'
                            value={age}
                            onChange={this.handlechange}
                        ></input>
                    </div> */}
                    <div>
                        <button type='submit'>SUBMIT</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Post
