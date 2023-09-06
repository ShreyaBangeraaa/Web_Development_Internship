function Buttons(props){
    return(
        <div className="Buttons">
        <p>
        <div className="btn-group">
                 <button style={props.style} className="rounded">{props.title}</button>
                
              </div>
       </p>
       </div>
    )

}
export default Buttons;