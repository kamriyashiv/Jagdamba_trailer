
import Slider from "./Slider";
const Hero =(props)=>{
    return <>
        <section>
            <div className="mainSlider">           
                <div id="demo" className="carousel slide" data-bs-ride="carousel">
               
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>               
                
                <div className="carousel-inner">  
                     <Slider imgSrc={props.img.SliderImg[0]}/>                  
                </div>                
              
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
                </div>
            </div>
        </section>

    </>
}
export default Hero;