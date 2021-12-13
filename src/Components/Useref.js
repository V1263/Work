
import React,{useRef} from 'react'

const App=() => {
  const data = useRef(null);
  const submitHandler = T =>{
     T.preventDefault();
     console.log(data.current.value);
  }
  return(
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input ref={data} type = "text"  placeholder="enter the name"  /> <br />
          <input type = "submit" />
        </form>
      </center>
    </div>
  );

}
export default App;
'https://jsonplaceholder.typicode.com/todos'