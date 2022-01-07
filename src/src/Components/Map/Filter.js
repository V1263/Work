import React from 'react'

function Filter() {
    const names=['jayyaram','jaggadesh','paul','pallu','pallu']
 const filtered=names.filter (name=>name.includes('p'))
    return (
        <div>
            {
                filtered.map(item => <li>{item}</li>)
            }
        </div>
    );
}

export default Filter;
