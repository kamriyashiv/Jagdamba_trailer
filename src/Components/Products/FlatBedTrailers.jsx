import flatBed from "../../Img/Flat-bed-or-Semi-low-bed-trailer-scaled-ou8w2pit8p6lw59am76adnaqiy88h3uk8v2i5s8a74.jpg";
import Productsbanner from "../../Img/Productsbanner.jpg"
import AboutDescription from "../about/AboutDescription";
const FlatBedTrailers=()=>{
    return(
        <> <AboutDescription aSrc={Productsbanner}/>
            <div className="mainSidewall py-5">
                <div className="container">
                   <div className="heading py-3 text-center">
                        <h2>Flat Bed Trailers /Semi Low Bed Trailers</h2>
                   </div>
                   <div className="row">
                        <div className="col-md-6">
                            <div className="imgBox ">
                                <img src={flatBed} alt="" className="img-thumbnail"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="coBox pt-2">
                                <p>We offer a wide range of Flat Bed Trailers and Semi Low Bed Trailers starting from 20ft, regular size 40ft, thereafter any length required by the customer. These trailers are mainly used for Transportation of Steel Bars, Coils, Heavy Machinery etc. We are having a capacity to design and manufacture these trailers for very heavy usage and of any size. These Trailers are manufactured with Jindal/Sail/Tata make high grade steel sheet/NPB. The Heavy-Duty trailers can be fitted with Argo-nut Bogie suspension.</p>

                            </div>
                            
                        </div>
                        
                   </div>
                </div>
            </div>
        </>
    );
}

export default FlatBedTrailers;