import { useState } from "react";
function app(){
    const[name,setName]=useState("Click")
    function handleClick(){
        setName(c=>c="Ouch!!")
    }
    function handleDouble(){
        setName(c=>c="Click")
    }
    return(<><button className="butt" onClick={handleClick} onDoubleClick={handleDouble}>{name}</button></>)
}
export default app;