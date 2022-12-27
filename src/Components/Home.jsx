import Hero from "./SmallComponents/Hero";
import About from "./About";
import SimpleSlider from "./Service";
import Img from "../img"
import Banner from "./Banner";
import Costumors from "./Costumors";

const Home =(props)=>{
    return <>
        <Hero img={Img}/>
        <About/>
        <SimpleSlider/>
        <Banner/>
        <Costumors/>        
    </>
}

export default Home;