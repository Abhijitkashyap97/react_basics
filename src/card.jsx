
import React,{ useRef,useEffect } from "react"

function card(props){
    const ref = useRef(0);/*here ref is a object with only one current property but also with a larger set of hmtl attributes. 
    it can store array, objects as well as an 
    an html Element    */
    console.log("Rendering...");

    function handleClick() {
        ref.current.focus()
        console.log(ref.current);
    }
    useEffect(()=>{
        console.log(ref.current)
    })
    return (<><div className="newclass">
    <img src="https://bestanimations.com/media/newyear/1368018716happy-new-year-2025-365newchances.gif.pagespeed.ce.gcCJ_J2GXP.gif">
    </img>
    <p>Name :{props.name}</p>
    <input type="text" ref={ref}/>
    <button onClick={handleClick}>Click me</button>
</div></>)
}
export default card