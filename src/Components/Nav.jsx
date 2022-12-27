import Img from "../img";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Link } from "react-router-dom";
import Buttons from "./SmallComponents/Buttons"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
const Nav = ()=>{
    const [showItems, updates]=useState(false);
   const menuHideShow=()=>{
    updates(!showItems)
   }
    return <>
        <nav>
            <div className="mainNav py-2">
                <div className="container">
                    <div className="navBox d-flex py-2">
                        <div className="logo w-25">
                            <a href="/">
                                <img src={Img.logo} className="w-100"/>    
                            </a>    
                        </div> 
                        <div className="Mbtn">
                            <MenuIcon onClick={menuHideShow}/>
                        </div>                        
                           
                       <div className={showItems? "show" : "hide"}>
                            <div className="navList">
                                <ul className="d-flex list-unstyled gap-4 m-0 " >
                                    <li onClick={()=>updates(false)}>
                                        <Link to="/">Home</Link>    
                                    </li>  
                                    <li onClick={()=>updates(false)}>
                                        <Link to="About">About</Link>    
                                    </li> 
                                    <li className="position-relative drop" >
                                        <Link>Products <ArrowDropDownIcon/></Link> 
                                        <ul className="Dmenu" onClick={()=>updates(false)}>
                                            <li><Link to="TipTrailers">Tip Trailers</Link></li> 
                                            <li><Link to="SidewallTrailers">Sidewall Trailers</Link></li> 
                                            <li><Link to="FlatBedTrailers">Flat Bed Trailers</Link></li> 
                                            <li><Link to="Tipper">Tipper</Link></li> 
                                            <li><Link to="RockBody">Rock Body</Link></li>    
                                        </ul>   
                                    </li> 
                                    <li onClick={()=>updates(false)}>
                                        <Link to="Contactus">Contact us</Link>    
                                    </li> 
                                    <li>
                                    <Buttons icon={<ContactPhoneIcon/>}
                                    text="Enquiry Now" 
                                    url="/Contactus"                          
                                        />
                                    </li>  
                                </ul>                           
                            </div>
                       </div>
                             
                    </div>    
                </div>    
            </div>    
        </nav>        
    </>
}

export default Nav;