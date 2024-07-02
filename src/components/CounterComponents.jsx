import React, { useState } from 'react';



const CounterComponents=()=>{
    const [count,setCount]=useState(12);

    return(
        <div>
            <h1>Count Component - {count}</h1>
            <button onClick={()=>setCount(count+1)}>Incriment</button>
        </div>
    );
}
export default CounterComponents;