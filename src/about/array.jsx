import React,{useState} from 'react'

function app(){
    const [arr,setArr]=useState(["Apple","Oranges","Bananas"])
    function add(){
        const name=document.getElementById('added').value
        setArr(f=>[...f,name])
    }
    function remove(i){
        setArr(arr.filter((_,index)=>i!==index))
    }
    return(<><ul>
        <h2>List of Foods</h2>
        {arr.map((e, i) => (
    <li key={i} onClick={() => remove(i)}>{e}</li>
))}
        </ul>
        <input type="text" id="added"/><button onClick={add}>Submit</button></>)
}
export default app;