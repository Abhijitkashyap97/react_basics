import React,{useState} from 'react'

function app(){
    const [car,setCar]=useState([])
    const [carYear,setCarYear]=useState(new Date().getFullYear())
    const [carMake,setCarMake]=useState("")
    const [carModel,setCarModel]=useState("")
    function addCar(){
        const newCar={year:carYear,
        make:carMake,
        model:carModel}
        setCar(c=>[...c,newCar])
    }
    function removeCar(index){
        setCar(c=>c.filter((_,i)=>i!==index))
    }
    function setYear(e){
        setCarYear(e.target.value)
    }
    function setModel(e){
        setCarModel(e.target.value)
    }
    function setMake(e){
        setCarMake(e.target.value)
    }
    return(<><div>
        <h2>List of Car Objects</h2>
        <ul>
        {car.map((e, i) => (
    <li key={i} onClick={() => removeCar(i)}>
        Car Name: {e.make}, Car Model: {e.model}, Car Year: {e.year}
    </li>
))}
        </ul>
        <input type="text" placeholder='enter car name' />
        <input type="number" placeholder='enter car year' onChange={setYear}/>
        <input type="text" placeholder='enter car model' onChange={setModel}/>
        <input type="make" placeholder='Enter the manufacturer' onChange={setMake}/>
        <button onClick={addCar}>Submit</button>
        </div></>)
}
export default app