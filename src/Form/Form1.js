import React, { useState } from 'react';
import Signupform from './Signupform';
import Sign from './Sign';

const Form = () => {
    const [formissubmitted, setformissubmited] = useState(false);
    const submitForm = () =>
        setformissubmited(true);
    return (
        <div>
            {!formissubmitted ? (<Signupform submitForm={submitForm} />) : (<Sign />)}</div>

    );

}
export default Form;