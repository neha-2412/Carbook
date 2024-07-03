import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import person_1 from './Images/person_1.jpg';
import person_2 from './Images/person_2.jpg';
import person_3 from './Images/person_3.jpg';
import TestiCard from './TestiCard';

const Testimonial = (props) =>{
    const options = {
        0: {
        items: 1,
        },
        768: {
        items: 2,
        },
        1024: {
            items: 3,
        },
        1440: {
            items: 3,
        },
    };

    const testiInfo = [
        {
            img:person_1,
            p1: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            p2: "Roger Scott",
            p3: "Web Developer"
        },
        {
            img:person_2,
            p1: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            p2: "Gabby Smith",
            p3: "System Analyst"
        },
        {
            img:person_3,
            p1: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            p2: "Floyd Weather",
            p3: "UI Designer"
        }
    ]

    return(
        <>
            <div className="container-fluid bg-light py-5" id="testimonial">
                <div className="row py-5 px-md-3 px-lg-4">
                    <div className="col-12 text-center pb-5">
                        <h6 className="text-uppercase color2">{props.info.title}</h6>
                        <h2 className="text-dark display-5 fw-semibold">{props.info.subTitle}</h2>
                    </div>
                    <div className="col-12 p-xl-5">
                        <div className="row px-xl-5 mx-xl-5">
                            <OwlCarousel className='owl-theme' loop margin={30} autoplay nav={false}  responsive={options}>
                                <div class='item'>
                                    <TestiCard img={testiInfo[0].img} info1={testiInfo[0].p1} info2={testiInfo[0].p2} info3={testiInfo[0].p3}/>
                                </div>
                                <div class='item'>
                                    <TestiCard img={testiInfo[1].img} info1={testiInfo[1].p1} info2={testiInfo[1].p2} info3={testiInfo[1].p3}/>
                                </div>
                                <div class='item'>
                                    <TestiCard img={testiInfo[2].img} info1={testiInfo[2].p1} info2={testiInfo[2].p2} info3={testiInfo[2].p3}/>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div> 
            </div>
        </>        
    );
}
export default Testimonial;