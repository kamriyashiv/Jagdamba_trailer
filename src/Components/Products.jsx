import Productsbanner from "../Img/Productsbanner.jpg"
import AboutDescription from "./about/AboutDescription";
import FlatBedTrailers from "./Products/FlatBedTrailers";
import RockBody from "./Products/RockBody";
import Sidewall from "./Products/SidewallTrailers";
import Tipper from "./Products/Tipper";
import TipTrailers from "./Products/TipTrailers";
const Products =()=>{
    return <>
         <AboutDescription aSrc={Productsbanner}/>
        <RockBody/>

    </>
}

export default Products;