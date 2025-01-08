import Header from '../header.jsx'
import Comp from './comp1.jsx'
import List from './list.jsx'
import Array from './array.jsx'
import ArrOfObjects from './arrObjs.jsx'
import TodoList from './todolist.jsx'
function App(){
    return(<><Header/><List/><Comp name="Abhijit" details="Hi Everyone" isLoggedin="true"/><Array/><ArrOfObjects/><TodoList/></>
    )
}
export default App