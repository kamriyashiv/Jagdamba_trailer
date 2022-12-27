import Sidewallimg from "../../Img/sidewall-gallery-4.jpg"
import Productsbanner from "../../Img/Productsbanner.jpg"
import AboutDescription from "../about/AboutDescription";
const Sidewall =()=>{
    return(
        <>
             <AboutDescription aSrc={Productsbanner}/>
            <div className="mainSidewall py-5">
                <div className="container">
                   <div className="heading py-3 text-center">
                        <h2>Sidewall Trailers (Manual Trailers)</h2>
                   </div>
                   <div className="row">
                        <div className="col-md-6">
                            <div className="imgBox ">
                                <img src={Sidewallimg} alt="" className="img-thumbnail"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="coBox pt-2">
                                <p>These are Non-Hydraulic box Type Trailers for various applications manufactured by Jagdamba Trailers as per customer required specification. The sizes of These Trailers are from 26ft to 34ft length and 8ft width. These Trailers can be used with both 45T and 55T Prime Movers.</p>

                            </div>
                            <div className="bBox img-thumbnail p-3 my-5">
                                <h4 className="py-3">The Salient features of Our Sidewall Trailers are </h4>
                                <ul>
                                    <li>Designed ergonomically for long life with minimized welding work to protect the metal sheet for distortion.</li>
                                    <li>The stress bearing sections have been reinforced to sustain new Axle load Norms.</li>
                                    <li>Two Years unique warranty policy on Body and Chassis.</li>
                                </ul>
                            </div>
                        </div>
                        
                   </div>
                </div>
            </div>
        </>
    );

}

export default Sidewall;