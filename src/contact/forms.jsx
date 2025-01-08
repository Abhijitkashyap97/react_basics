import React,{useState} from 'react'

function app(){
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    function eventHandler(e){
        setName(e.target.value)
    }
    function eventHandler1(event){
        setEmail(event.target.value)
    }
    return (<><form>
        <br></br>
    <label>Name:</label>
    <input type="text" value={name} onChange={eventHandler}/>
    <p>Name:{name}</p>
<br></br>
    <label>Email:</label>
    <input type="email" value={email} onChange={eventHandler1} />
    <p>Email:{email}</p>
  </form></>)
}
export default app;