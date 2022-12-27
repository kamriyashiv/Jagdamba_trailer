import Buttons from "./Buttons";
const Cards =(props)=>{
    return(
        <>
            <div className="Cardbox thumbnail">                              
                <img src={props.imgSrc}/>
                <h4 className="p-2 text-center fs-5">{props.title}</h4>
                <p>{props.Desc}</p>
                <div>
                    <Buttons text="View More" url="/Contactus"/>
                </div>
            </div>
        </>
    );
}

export default Cards;