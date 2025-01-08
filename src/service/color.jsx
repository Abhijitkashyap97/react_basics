import React,{useState} from 'react'

function app(){
    const [color,setColor]=useState("#ff5733");
    function handleColor(e){
        setColor(e.target.value)
    }
    return(<><div>
        <div className="color" onChange={handleColor}><input type="color" value={color} /></div>
        <br/><div style={{backgroundColor:color,width:100}}>Hey I am</div>
        </div></>)
}
export default app;
