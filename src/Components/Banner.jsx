import Buttons from "./SmallComponents/Buttons";
import Img from "../img"
const Banner=()=>{
    const BgImag={
        backgroundImage: `url("${Img.banner}")`,
        height: "300px", 
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        color: "white"
    }
    
    return (
        <>
            <section>
                <div className="mainBanner my-4 p-5" style={BgImag}>
                    <div className="container">
                        <div className="bannerContent d-flex">
                            <div className="w-50">
                                <h5>IDEA AND INNOVATION</h5>
                                <h1>World class Infrastructure with modern machineries</h1>
                            </div>
                            <div>
                                <Buttons text="CORPORATE BROCHURE" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Banner;