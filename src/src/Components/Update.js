import { useEffect } from 'react';
import axios from 'axios';

const todo = [{
    id: 10,
    title: 'go to gym',
    body: 'practicing sport is very important',
    userId: 2,
}
    , {
    id: 20,
    title: ' gym',
    body: ' important',
    userId: 2,
},
{
    id: 30,
    title: 'go ',
    body: 'practicing ',
    userId: 2,
},
{
    id: 40,
    title: 'going ',
    body: 'practice ',
    userId: 8,
}]


const App = () => {



    useEffect(() => {
        axios.put('https://jsonplaceholder.typicode.com/posts/10', todo)
            .then((response) => {
                console.log(response.status);
                console.log("response==>", response.data);
            })
            .catch((e) => console.log('something went wrong :(', e));
    }, []);
    const updateData = () => {

    }

    return <div>
        PUT REQUEST
        {
            todo.map(todo => <div key={todo.id}> <h3> body - {todo.body}  </h3>
                <button onClick={updateData}>UPDATE</button>
                <button onClick>DELETE</button>
            </div>)
        }
    </div>;

};
export default App;