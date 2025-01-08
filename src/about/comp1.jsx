function App(props) {
    if(props.isLoggedin==="true"){
        return(<><h1>Hi {props.name}</h1><p>{props.details}</p></>)
    }
    else{
        return(<h1>Please Login!!</h1>)
    }
}
export default App
