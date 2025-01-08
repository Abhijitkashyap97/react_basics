import Component  from "./component.jsx"
import Image from './img.jsx'
import Comp from './MyComp.jsx'
import Form from './forms.jsx'
import Header from '../header.jsx'
import Clock from './clock.jsx'
function App(){
    return(<><Header/><Component/><Image/><br/>
    <Comp/>
    <br/>
    <Form/>
    <Clock/>
    </>
    )
}
export default App