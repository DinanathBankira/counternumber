import React, { useState } from 'react';



const CounterComponents=()=>{
    const [count,setCount]=useState(12);
    console.log(count);

    return(
        <div>
            <h1>Count Component - {count}</h1>
            <button onClick={()=>setCount(count+1)}>Incriment</button>
            <button onClick={()=>setCount(count-1)}>Decriment</button>
        </div>
    );
}
export default CounterComponents;