function app(props){
    return(<div>
         <div className="services-wrapper">
      <div className="service">
        <h2 >{props.name}
        </h2>
        <p>{props.details}</p>
      </div>
    </div>
    </div>)
}
export default app