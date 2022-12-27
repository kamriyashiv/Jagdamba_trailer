import tipper from "../../Img/Tipper-1631x2048.jpg";
import Productsbanner from "../../Img/Productsbanner.jpg"
import AboutDescription from "../about/AboutDescription";
const Tipper=()=>{
    return(
        <>
         <AboutDescription aSrc={Productsbanner}/>
            <div className="mainSidewall py-5">
                <div className="container">
                   <div className="heading py-3 text-center">
                        <h2>TIPPER</h2>
                   </div>
                   <div className="row">
                        <div className="col-md-6">
                            <div className="imgBox ">
                                <img src={tipper} alt="" className="img-thumbnail"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="coBox pt-2">
                                <p>We manufacture Tippers for all chassis such as 25T, 31T, 37T popularly known as 10, 12 & 14 wheelers Trucks respectively. Our unique design enables you for maximum payload and durability. Also the ergonomic design saves on fuel and Tyre cost. The Tippers start from 12 cum to 26 cum for varied applications like Transportation of Coal, Aggregates, Sand, Iron Ore, Lime Stone, Dolomite etc.</p>

                            </div>
                            
                        </div>
                        
                   </div>
                </div>
            </div>
        </>
    );
}

export default Tipper;