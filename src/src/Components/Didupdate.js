import { useState, useEffect } from 'react';


const Didupdate = () => {
    const [name, setname] = useState('Navajna');
    const [age, Setage] = useState('10');

    const handleClick = () => {
        setname('Technologies');
        if (age === '10')
            Setage('25')
        else{
            setname('Navajna');
        Setage('10') }
    }

    // useEffect(() => {
    //     Setage('25');
    // });

    useEffect(() => {
        console.log(`on ${Setage} update`);
       

    }, [name]);
          

    //     document.age = Setage;
    //   });
    return (
        <div>
            
            <p> {name} is {age} </p>
            <button onClick={handleClick}>Clickme</button>
        </div>
    );
}

export default Didupdate;



