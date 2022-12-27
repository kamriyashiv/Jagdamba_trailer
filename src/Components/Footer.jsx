import Img from "../img";
import "./Footer.css";
import Social from "./SmallComponents/Social";
const Footer =()=>{
    return(
        <>
           <footer>
                <div className="mainFooter bg-dark text-white text-center pt-5 ">
                    <div className="container">
                        <div className="footerBox">
                            <div>
                                <img src={Img.logo} className="w-100"/> 
                            </div>
                            <br/>
                            <div>
                                <p>Jagdamba Trailers is a leading Manufacturers of Tip Trailers, Tippers, Flat Bed Trailers, Sidewall Trailers, Semi Low Bed Trailers and various Semi-Trailers. Our Trailers and Tippers are manufactured strictly as per CMVR and loaded with several value-added features which add into the ease of operation and result in maximum profit.</p>
                            </div>
                            <div className="fSocial">
                              <Social/>   
                            </div>
                        </div>
                    </div>
                    <div className="fCreadit mt-5 p-3">
                        <p>© 2018 All rights Reserved. Design by <a href="http://codefusioninfotech.com/" target="_blank">Code fusion Infotech</a></p>
                    </div>
                </div>
           </footer>
        </>
    );
}

export default Footer;