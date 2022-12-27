import rockBody from "../../Img/press-13aug20-lowres.jpg"
import Productsbanner from "../../Img/Productsbanner.jpg"
import AboutDescription from "../about/AboutDescription";
const RockBody=()=>{
    return(
        <>
         <AboutDescription aSrc={Productsbanner}/>
            <div className="mainSidewall py-5">
                <div className="container">
                   <div className="heading py-3 text-center">
                        <h2>ROCK BODY</h2>
                   </div>
                   <div className="row">
                        <div className="col-md-6">
                            <div className="imgBox ">
                                <img src={rockBody} alt="" className="img-thumbnail"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="coBox pt-2">
                                <p>These are Heavy Duty Tippers designed for Heavy materials like Rock & Lime Stone. These Tippers are normally made of very high Tensile Hardox steel. This can be Scoop Body type or regular tail door type. The Sizes of Rock Body are ranging from 14 cum to 20 cum on various Tipper Chassis.</p>

                            </div>
                            
                        </div>
                        
                   </div>
                </div>
            </div>
        </>
    );
}

export default RockBody;