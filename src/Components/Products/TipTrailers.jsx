
import tipTrailer from "../../Img/tata-trucks-tiptrailer.jpg";
import "./Products.css";
import Productsbanner from "../../Img/Productsbanner.jpg"
import AboutDescription from "../about/AboutDescription";
import Table from "./Table";
const PCard = ()=>{
    return <>
     <AboutDescription aSrc={Productsbanner}/>
       <div className="mainTip py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                             <img src={tipTrailer} alt="" className="w-100 img-thumbnail"/>                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div >
                             <h2><strong>Tip Trailers</strong></h2>   
                             <p>The usage of Tip Trailers has been expanded in various applications such as Coal Transport, Iron Ore, Clinkers, Fly Ash, Sand, Aggregates, Lime Stone, Dolomites etc. These Tip Trailers are required across India for these applications.</p>

                             <p>Our in-house R&D facility enable us to design all kinds of Tip Trailers as per customer required specifications according to CMVR guidelines. Our Tip Trailers are iCAT approved and manufactured as per most stringent quality norms and with compliance to ISO 9001 QMS.</p>             

                             <p>The Tip Trailers manufactured by us are of various volumetric capacity starting from 16cum to 42cum to accommodate the different density materials and can be coupled with 45T and 55T Prime Movers.</p>           
                        </div>
                    </div>

                    <div className="col-md-12">
                       <div className="border p-3 my-5">
                        <h2><strong>Salient Features of Our Tip Trailers</strong></h2>
                        <ul>
                            <li>Jointless Sidewall designed and manufactured using cool cutting technology only, keeping the material property intact.</li>
                            <li>Welding work has been minimized to protect the Material Property from heat influenced distortion.</li>
                            <li>All weaker sections have been redesigned uniquely and reinforced to sustain the increased Axle Load and for longer lasting operation.</li>
                            <li>Unique Locking mechanism designed and housed in a protected chamber for longer lasting operation.</li>
                            <li>Ergonomically designed to increase the Tyre life upto 30% and diesel mileage due to less drag force and no sideways movement.</li>
                            <li>Two Years unique warranty policy on Body and Chassis.</li>
                        </ul>
                       </div>
                    </div>

                    <div className="col-md-12">
                        <div className="border py-5">
                            <h2 className="px-2"><strong>Tip Trailer Basic Parameters</strong></h2> 
                            <br/>   
                            <div className="table-responsive">
                                <Table/>                                
                            </div>
                        </div>                       
                    </div>
                </div>
            </div>

       </div>
    </>
}

export default PCard;