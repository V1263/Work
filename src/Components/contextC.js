import React from 'react';
import {UserContext} from '../App.js';
 
const ComponentC = () =>{
    return(
        <div>
            <UserContext.Consumer>
                {value => <div>{value}</div>}
            </UserContext.Consumer>
        </div>
    );

}
export default ComponentC;

  App.js

import React from 'react';
import ContextC from '../src/Components/contextC';

 export const UserContext = React.createContext();
const App = () => {
  return(
 <div>
   <center>
     <UserContext.Provider value={"Giridhar"}>
       <ContextC />
     </UserContext.Provider>
   </center>
 </div>
  );
}
export default App;