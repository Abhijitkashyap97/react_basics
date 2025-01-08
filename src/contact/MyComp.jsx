import React,{useState} from 'react'
function app(){
    //we need a state variable(name ,age) and hange it's value using setName (which is the setter function here)
    const [name,setName]=useState("Guest");
    const [age,setAge]=useState(0);
    function handleClick(){
        setName("Abhijit")
    }
    function handleAge(){
        setAge(age+1)
    }
    return(<><p>Name: {name}</p><button onClick={handleClick} className="butt">Click!</button>
    <p>Age is: {age}</p><button onClick={handleAge} className="butt">Set Age</button></>)
}
export default app