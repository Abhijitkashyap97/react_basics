import Header from '../header.jsx'
import Comp from './component1.jsx'
import ColorPicker from './color.jsx' 
import Counter from './counter.jsx'
import Object from './objects.jsx' 
function App(){
    return(<>
    <Header/>
    <Comp name="Web design" details="We build responsive and dynamic websites to meet your business needs."/>
    <Comp name="Graphic design" details="Creative and visually appealing designs for your brand and marketing needs."/>
    <ColorPicker/>
    <Counter/>
    <Object/>
    </>)
}
export default App
