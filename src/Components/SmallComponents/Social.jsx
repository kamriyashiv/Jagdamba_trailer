import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
const Social =()=>{
    return<>
        <div className="SoicalIcon">
            <ul className="d-flex list-unstyled gap-3 m-0 p-1">
                <li>
                    <a>
                        <FacebookIcon/>
                    </a>
                </li>
                <li>
                    <a>
                        <LinkedInIcon/>
                    </a>
                </li>
                <li>
                    <a>
                        <YouTubeIcon/>
                    </a>
                </li>
                <li>
                    <a>
                        <InstagramIcon/>
                    </a>
                </li>
            </ul>
        </div> 
    </>
}

export default Social;