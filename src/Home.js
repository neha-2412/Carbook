import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import AboutUs from "./AboutUs";
import OurServices from "./OurServices";
import Earn from "./Earn";
import Testimonial from "./Testimonial";
import Counter from "./Counter";
import about from './Images/about.jpg';
import image_1 from './Images/image_1.jpg';
import image_2 from './Images/image_2.jpg';
import image_3 from './Images/image_3.jpg';
import car_1 from './Images/car_1.jpg';
import car_2 from './Images/car_2.jpg';
import car_3 from './Images/car_3.jpg';
import car_4 from './Images/car_4.jpg';
import car_5 from './Images/car_5.jpg';
import car_6 from './Images/car_6.jpg';
import CarCard from './CarCard';
import RecentBlogCard from './RecentBlogCard';

const Home = (props) =>{
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

    const aboutUsInfo = [
        {
            img:about,
            p1: "About Us",
            p2: "Welcome to Carbook",
            p3: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
            p4: "On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word and the Little Blind Text should turn around and return to its own, safe country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
            btn:"Search Vehicle" 
        }
    ]

    const carInfo = [
        {
            img:car_1,
            title:"Mercedes Grand Sedan",
            p1:"Cheverolet",
            p2:"500",
            btn1:"Book Now",
            btn2:"Details"
        },
        {
            img:car_2,
            title:"Range Rover",
            p1:"Subaru",
            p2:"500",
            btn1:"Book Now",
            btn2:"Details"
        },
        {
            img:car_3,
            title:"Mercedes Grand Sedan",
            p1:"Cheverolet",
            p2:"500",
            btn1:"Book Now",
            btn2:"Details"
        },
        {
            img:car_4,
            title:"Mercedes Grand Sedan",
            p1:"Cheverolet",
            p2:"500",
            btn1:"Book Now",
            btn2:"Details"
        },
        {
            img:car_5,
            title:"Range Rover",
            p1:"Subaru",
            p2:"500",
            btn1:"Book Now",
            btn2:"Details"
        },
        {
            img:car_6,
            title:"Mercedes Grand Sedan",
            p1:"Cheverolet",
            p2:"500",
            btn1:"Book Now",
            btn2:"Details"
        }
    ]

    const testiInfo = [
        {
          title:"Testimonial",
          subTitle: "Happy Clients"
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
    
    const recentBlogInfo = [
        {
            img:image_1,
            title:"Why Lead Generation is Key for Business Growth",
            btn: "Continue"
        },
        {
            img:image_2,
            title:"Why Lead Generation is Key for Business Growth",
            btn: "Continue"
        },
        {
            img:image_3,
            title:"Why Lead Generation is Key for Business Growth",
            btn: "Continue"
        }
    ]

    const counterInfo = [
        {
            p11:"60",
            p22:"Year",
            p33:"Experienced",
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
            <div className='container-fluid vh-100' id='home'>
                <div className='row'>
                    <div className='col-12 px-xl-5'>
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100 pt-5">
                          <h1 className="display-5 fw-bold py-4 mt-5" data-aos="flip-left">{props.info.p1}</h1>
                          <p className='text-white fw-semibold fs-5 px-xl-5'>{props.info.p2}</p>
                          <a className='d-flex align-items-center mt-4 justify-content-center text-decoration-none'>
                            <div className='v-icon d-flex align-items-center justify-content-center'>
                                <span><i class="fas fa-play text-white"></i></span>
                            </div>
                            <div>
                                <span className='text-white fs-6 px-md-3'>{props.info.p3}</span>            
                            </div>
                          </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid pt-5 px-4 px-lg-5 bg-light' id='h-form'>
                <div className='row px-lg-3 px-xl-5'>
                    <div className='col-12 px-xl-5'>
                        <div className='row px-xl-5'>
                            <div className='col-12 col-md-5 col-lg-4 bg-color2 p-5 p-md-3 p-lg-5 rounded-2'>
                                <div class="row g-3">
                                    <h3 className='text-white fw-bold' data-aos="flip-up">{props.info.p4}</h3>
                                    <div className="col-12">
                                        <label htmlFor="pickUp" className="form-label text-white">{props.info.p5}</label>
                                        <input type="text" className="form-control" id="pickUp" placeholder='City, Airport, Station, etc.'/>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="dropOff" className="form-label text-white">{props.info.p6}</label>
                                        <input type="text" className="form-control" id="dropOff" placeholder='City, Airport, Station, etc.'/>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="pickUpDate" className="form-label text-white">{props.info.p7}</label>
                                        <input type="date" className="form-control" id="pickUpDate" placeholder="Date"/>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="dropOffDate" className="form-label text-white">{props.info.p8}</label>
                                        <input type="date" className="form-control" id="dropOffDate" placeholder="Apartment, studio, or floor"/>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="pickUpTime" className="form-label text-white">{props.info.p9}</label>
                                        <input type="time" className="form-control" id="pickUpTime"/>
                                    </div>
                                    <div className="col-12 text-center pt-3">
                                        <p><button type='button' className='bg-color1 border-0 px-lg-5 py-3 text-white rounded-1 rent'>{props.info.p10}</button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-7 col-lg-8 bg-white my-5 d-flex flex-column justify-content-center align-items-center'>                        
                                <div className='row p-5 g-3 g-md-0'>
                                    <div className='col-12 pb-5 px-0'>
                                        <h3>{props.info.p11}</h3>
                                    </div>
                                    <div className='col-12 col-md-4'>
                                        <div className='ps-4 ps-md-0'>
                                            <div className='border rounded-circle d-flex justify-content-center align-items-center bg-white h-icon'>
                                                <i className="fas fa-map-marker-alt fs-2"></i>
                                            </div>
                                            <div>
                                                <p>{props.info.p12}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-4'>
                                        <div className='ps-4 ps-md-0'>
                                            <div className='border rounded-circle d-flex justify-content-center align-items-center bg-white h-icon'>
                                                <i className="far fa-handshake fs-2"></i>
                                            </div>
                                            <div>
                                                <p>{props.info.p13}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-4'>
                                        <div className='ps-4 ps-md-0'>
                                            <div className='border rounded-circle d-flex justify-content-center align-items-center bg-white h-icon'>
                                                <i className="fas fa-car fs-2"></i>
                                            </div>
                                            <div>
                                                <p>{props.info.p14}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='pt-5'>
                                        <button type='button' className='bg-color2 border-0 px-4 py-3 text-white rounded-1'>{props.info.p15}</button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             <div className="container-fluid py-5 px-lg-5 bg-light">
                <div className="row p-xl-5">
                    <div className="col-12 text-center py-5">
                        <h6 className="text-uppercase color2">{props.info.title1}</h6>
                        <h2 className="text-dark display-5 fw-semibold" >{props.info.subTitle1}</h2>
                    </div>
                    <div className="col-12 px-xl-5 pb-5">
                        <div className="row px-xl-5">
                            <OwlCarousel className='owl-theme' loop margin={30} autoplay nav={false} responsive={options}>
                                <div className='item'>
                                    <CarCard img={carInfo[0].img} info1={carInfo[0].title} info2={carInfo[0].p1} info3={carInfo[0].p2} info4={carInfo[0].btn1} info5={carInfo[0].btn2}/>    
                                </div>
                                <div className='item'>
                                    <CarCard img={carInfo[1].img} info1={carInfo[1].title} info2={carInfo[1].p1} info3={carInfo[1].p2} info4={carInfo[1].btn1} info5={carInfo[1].btn2}/>
                                </div>
                                <div className='item'>
                                    <CarCard img={carInfo[2].img} info1={carInfo[2].title} info2={carInfo[2].p1} info3={carInfo[2].p2} info4={carInfo[2].btn1} info5={carInfo[2].btn2}/>
                                </div>
                                <div className='item'>
                                    <CarCard img={carInfo[3].img} info1={carInfo[3].title} info2={carInfo[3].p1} info3={carInfo[3].p2} info4={carInfo[3].btn1} info5={carInfo[3].btn2}/>
                                </div>
                                <div className='item'>
                                    <CarCard img={carInfo[4].img} info1={carInfo[4].title} info2={carInfo[4].p1} info3={carInfo[4].p2} info4={carInfo[4].btn1} info5={carInfo[4].btn2}/>
                                </div>
                                <div className='item'>
                                    <CarCard img={carInfo[5].img} info1={carInfo[5].title} info2={carInfo[5].p1} info3={carInfo[5].p2} info4={carInfo[5].btn1} info5={carInfo[5].btn2}/>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>

            <AboutUs info={aboutUsInfo[0]}/>
            <OurServices info={servicesInfo[0]}/>
            <Earn info={earnInfo[0]}/>
            <Testimonial info={testiInfo[0]}/>

            <div className="container-fluid pt-5 p-xl-5">
                <div className="row p-xl-5">
                    <div className="col-12 text-center py-5">
                        <h6 className="text-uppercase color2">{props.info.title2}</h6>
                        <h2 className="text-dark display-5 fw-semibold">{props.info.subTitle2}</h2>
                    </div>
                    <div className="col-12 px-lg-4 px-xl-5">
                        <div className="row px-md-3 px-xl-5 g-3">
                            <div className="col-12 col-md-4">
                                <RecentBlogCard img={recentBlogInfo[0].img} info1={recentBlogInfo[0].title} info2={recentBlogInfo[0].btn}/>
                            </div>
                            <div className="col-12 col-md-4">
                                <RecentBlogCard img={recentBlogInfo[1].img} info1={recentBlogInfo[1].title} info2={recentBlogInfo[1].btn}/>
                            </div>
                            <div className="col-12 col-md-4">
                                <RecentBlogCard img={recentBlogInfo[2].img} info1={recentBlogInfo[2].title} info2={recentBlogInfo[2].btn}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Counter info={counterInfo[0]}/>
        </>
    );
}
export default Home;