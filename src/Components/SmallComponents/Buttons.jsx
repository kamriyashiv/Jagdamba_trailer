const Buttons =(props)=>{
    return <>
         <div className="btnDesign">                         
            <a href={props.url} className="btn btnNew btn-outline-danger text-white text-decoration-none px-4 f-bold"> {props.icon} {props.text}
             </a>                  
        </div>
    </>
}
export default Buttons;