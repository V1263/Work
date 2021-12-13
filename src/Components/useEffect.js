import { useState, useEffect } from "react";
import ReactDOM from "react-dom";



function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 3000);
  });

  return (
    <div>
      <h1>I've rendered {count} times!</h1>;
    </div>

  );
}


ReactDOM.render(<Counter />, document.getElementById('root'));
export default useEffect;