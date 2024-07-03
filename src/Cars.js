import Hero from "./Hero";
import car_1 from './Images/car_1.jpg';
import car_2 from './Images/car_2.jpg';
import car_3 from './Images/car_3.jpg';
import car_4 from './Images/car_4.jpg';
import car_5 from './Images/car_5.jpg';
import car_6 from './Images/car_6.jpg';
import car_7 from './Images/car_7.jpg';
import car_8 from './Images/car_8.jpg';
import car_9 from './Images/car_9.jpg';
import car_10 from './Images/car_10.jpg';
import car_11 from './Images/car_11.jpg';
import car_12 from './Images/car_12.jpg';
import CarCard from "./CarCard";

const Cars = () =>{

    const carsHero =[
        {
            p1: "Home",
            p2: "Cars",
            p3: "Choose Your Car"
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
        },
        {
            img:car_7,
            title:"Mercedes Grand Sedan",
            p1:"Cheverolet",
            p2:"500",
            btn1:"Book Now",
            btn2:"Details"
        },
        {
            img:car_8,
            title:"Range Rover",
            p1:"Subaru",
            p2:"500",
            btn1:"Book Now",
            btn2:"Details"
        },
        {
            img:car_9,
            title:"Mercedes Grand Sedan",
            p1:"Cheverolet",
            p2:"500",
            btn1:"Book Now",
            btn2:"Details"
        },
        {
            img:car_10,
            title:"Mercedes Grand Sedan",
            p1:"Cheverolet",
            p2:"500",
            btn1:"Book Now",
            btn2:"Details"
        },
        {
            img:car_11,
            title:"Range Rover",
            p1:"Subaru",
            p2:"500",
            btn1:"Book Now",
            btn2:"Details"
        },
        {
            img:car_12,
            title:"Mercedes Grand Sedan",
            p1:"Cheverolet",
            p2:"500",
            btn1:"Book Now",
            btn2:"Details"
        }
    ]

    return(
        <>  
            <Hero info={carsHero[0]}/>
            <div className="container-fluid py-5 px-xl-5 bg-light">
                <div className="row p-md-4 p-lg-4 p-xl-5">
                    <div className="col-12 px-xl-5">
                       <div className="row g-4 px-xl-5">
                            <div className="col-12 col-md-6 col-lg-4">
                                <CarCard img={carInfo[0].img} info1={carInfo[0].title} info2={carInfo[0].p1} info3={carInfo[0].p2} info4={carInfo[0].btn1} info5={carInfo[0].btn2}/>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <CarCard img={carInfo[1].img} info1={carInfo[1].title} info2={carInfo[1].p1} info3={carInfo[1].p2} info4={carInfo[1].btn1} info5={carInfo[1].btn2}/>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <CarCard img={carInfo[2].img} info1={carInfo[2].title} info2={carInfo[2].p1} info3={carInfo[2].p2} info4={carInfo[2].btn1} info5={carInfo[2].btn2}/>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <CarCard img={carInfo[3].img} info1={carInfo[3].title} info2={carInfo[3].p1} info3={carInfo[3].p2} info4={carInfo[3].btn1} info5={carInfo[3].btn2}/>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <CarCard img={carInfo[4].img} info1={carInfo[4].title} info2={carInfo[4].p1} info3={carInfo[4].p2} info4={carInfo[4].btn1} info5={carInfo[4].btn2}/>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <CarCard img={carInfo[5].img} info1={carInfo[5].title} info2={carInfo[5].p1} info3={carInfo[5].p2} info4={carInfo[5].btn1} info5={carInfo[5].btn2}/>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <CarCard img={carInfo[6].img} info1={carInfo[6].title} info2={carInfo[6].p1} info3={carInfo[6].p2} info4={carInfo[6].btn1} info5={carInfo[6].btn2}/>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <CarCard img={carInfo[7].img} info1={carInfo[7].title} info2={carInfo[7].p1} info3={carInfo[7].p2} info4={carInfo[7].btn1} info5={carInfo[7].btn2}/>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <CarCard img={carInfo[8].img} info1={carInfo[8].title} info2={carInfo[8].p1} info3={carInfo[8].p2} info4={carInfo[8].btn1} info5={carInfo[8].btn2}/>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <CarCard img={carInfo[9].img} info1={carInfo[9].title} info2={carInfo[9].p1} info3={carInfo[9].p2} info4={carInfo[9].btn1} info5={carInfo[9].btn2}/>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <CarCard img={carInfo[10].img} info1={carInfo[10].title} info2={carInfo[10].p1} info3={carInfo[10].p2} info4={carInfo[10].btn1} info5={carInfo[10].btn2}/>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <CarCard img={carInfo[11].img} info1={carInfo[11].title} info2={carInfo[11].p1} info3={carInfo[11].p2} info4={carInfo[11].btn1} info5={carInfo[11].btn2}/>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </>  
    );
}
export default Cars;