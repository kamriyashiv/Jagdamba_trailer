const Slider=(props)=>{
    return <>         
        <div className="carousel-item active">
        <img src={props.imgSrc.Slider1} alt="Los Angeles" className="d-block w-100" />
        </div>
        <div className="carousel-item">
        <img src={props.imgSrc.Slider2}  alt="Chicago" className="d-block w-100" />
        </div>
        <div className="carousel-item">
        <img src={props.imgSrc.Slider3}  alt="New York" className="d-block w-100" />
        </div>
    </>
}

export default Slider;