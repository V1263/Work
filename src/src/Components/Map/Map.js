import React from 'react'

function Map() {
    let set = ['react js','node js','express js','angular js','angular js']
    return (
        <div>
            {
                set.map((value,index)=><li>{value}</li>)
            }
        </div>
    );
}

export default Map;
