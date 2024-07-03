import Hero from "./Hero";
import OurServices from "./OurServices";
import Earn from "./Earn";

const Services = () =>{

    const servicesHero =[
        {
            p1: "Home",
            p2: "Services",
            p3: "Our Services"
        }
    ]

    const servicesInfo = [
        {
          title:"Services",
          subTitle: "Our Latest Services"
        }
    ]

    const earnInfo = [
        {
            p1:"Do You Want To Earn With Us? So Don't Be Late.",
            p2:"Become A Driver",
        }
    ]

    return(
        <>
            <Hero info = {servicesHero[0]}/>
            <OurServices info={servicesInfo[0]}/>
            <Earn info={earnInfo[0]}/>
        </>        
    );
}
export default Services;