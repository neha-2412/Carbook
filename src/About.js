import Hero from "./Hero";
import Counter from "./Counter";
import Earn from "./Earn";
import Testimonial from "./Testimonial";
import AboutUs from "./AboutUs";
import about from './Images/about.jpg';

const About = () =>{

    const aboutHero =[
        {
            p1: "Home",
            p2: "About Us",
            p3: "About Us"
        }
    ]

    const aboutUsInfo = [
        {
            img: about,
            p1: "About Us",
            p2: "Welcome to Carbook",
            p3: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
            p4: "On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word and the Little Blind Text should turn around and return to its own, safe country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
            btn:"Search Vehicle" 
        }
    ]

    const testiInfo = [
        {
          title:"Testimonial",
          subTitle: "Happy Clients"
        }
    ]

    const earnInfo = [
        {
            p1:"Do You Want To Earn With Us? So Don't Be Late.",
            p2:"Become A Driver",
        }
    ]

    const counterInfo = [
        {
            p11:"60",
            p12:"Year",
            p13:"Experienced",
            p21:"1090",
            p22:"Total",
            p23:"Cars",
            p31:"2590",
            p32:"Happy",
            p33:"Customers",
            p41:"67",
            p42:"Total",
            p43: "Branches"
        }
    ]
    return(
        <>
            <Hero info={aboutHero[0]}/>

            <AboutUs info={aboutUsInfo[0]}/>

            <Earn info={earnInfo[0]}/>

            <Testimonial info={testiInfo[0]}/>
            
            <Counter info={counterInfo[0]}/>
        </>
    );
}
export default About;