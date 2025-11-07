import {useState} from 'react';
export default function Counter(){
    const [count, SetCount] =useState(0);

    return(
        <div>
            <button onClick={() =>SetCount(count+1)}>Increment</button>
            <p> You clicked {count} times </p>
            <button onClick={() =>SetCount(count-1)}>Decrement</button>
            <p> You unclicked {count-1} times </p>
            <button onClick={() =>SetCount(0)}>Reset</button>
            <p> reset count to {count}  </p>
        </div>
    );
}