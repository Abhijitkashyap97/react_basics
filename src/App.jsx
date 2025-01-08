import Card from './card.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx'
import UseEffect from'./useEffect.jsx'
function App(){
  return(<>
  <Header/>
    <Card name="Abhijit"/>
    <Card name="Mudit"/>
    <a href="http://www.youtube.com">Youtube</a>
    <UseEffect/>
    <Footer/>
    </>)
}
export default App
