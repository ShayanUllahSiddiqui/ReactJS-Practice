import React, {useState} from 'react';

export default function Counter({count, add, sub}){

  return(
    <div>
       <h1>{count}</h1>
       <button onClick={add}>+</button>
       <button onClick={sub}>-</button>
    </div>
)
};
