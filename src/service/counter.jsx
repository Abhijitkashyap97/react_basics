import React,{useState} from 'react'
function app(){
   const[count,setCount]=useState(0)
   function increment(){
    setCount(c=>c+1)
   }
   function decrement(){
    setCount(c=>c-1)
   }
   function reset(){
    setCount(c=>c=0)
   }
   return(<><div><p>Count: {count}</p><button onClick={increment}>Increase</button><p>  </p><button onClick={decrement}>Decrease</button>
   <button onClick={reset}>Reset</button></div></>);
   
}
export default app;