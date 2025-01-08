import React,{useState} from 'react'
function app(){
    const [car,setCar]=useState({name:"Suzuki",make:2024,price:1000000})
    function handleName(e){
        setCar(c=>({...c,name:e.target.value}))
    }
    function handlemake(e){
        setCar(c=>({...c,make:e.target.value}))
    }
    function handleprice(e){
        setCar(c=>({...c,price:e.target.value}))
    }
    return(<><h3>Name: {car.name}</h3> <h3>Make year: {car.make}</h3> <h3>Price: {car.price}</h3><br/>
   <input type="name" value={car.name} onChange={handleName}/>
   <input type="date" value={car.make}  onChange={handlemake}/>
   <input type="number" value={car.price}  onChange={handleprice}/></>)
} 
export default app;