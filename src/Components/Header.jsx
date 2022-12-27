import Data from "../DataStore";

import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import Social from "./SmallComponents/Social";
const Header =()=>{
    return <>
       <header>
            <div className="mainHeader bg-danger text-white">
                <div className="container">
                    <div className="d-flex Hrow">
                        <div className="Hbox1">
                            <div className="Cbos">
                                <ul className="d-flex list-unstyled gap-3 m-0 p-1">
                                    <li><PhoneAndroidIcon/>{Data[0].contactNO[0]}</li>
                                    <li><EmailIcon/>{Data[0].contactNO[1]}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="Hbox1">
                            <Social/>                           
                        </div>
                    </div>
                </div>
            </div>
        </header> 
    </>
}

export default Header;