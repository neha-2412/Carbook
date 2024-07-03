import Hero from "./Hero";

const Contact = (props) =>{

    const contactHero =[
        {
            p1: "Home",
            p2: "Contact Us",
            p3: "Contact Us"
        }
    ]

    return(
        <>  
            <Hero info={contactHero[0]}/>
            <div className="container-fluid py-5">
                <div className="row p-md-4 p-lg-5">
                    <div className="col-12 col-xl-1">

                    </div>
                    <div className="col-12 col-md-4 col-xl-4">
                        <div className="row">
                            <div className="col-12">
                                <div className="border w-100 p-md-3 rounded mb-3 d-flex ps-5 pt-4">
                                    <div>
                                        <span className="pe-3 color2 fs-5">
                                            <i class="fas fa-map"></i>
                                        </span>
                                    </div>
                                    <p>
                                        <span className="color3">{props.info.p1}:</span>
                                        <p className="fw-bold pe-5 py-2">{props.info.p2}</p>
                                    </p>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="border w-100 p-md-3 rounded mb-2 d-flex ps-5 pt-5">
                                    <div>
                                        <span className="pe-3 color2 fs-5">
                                            <i class="fas fa-mobile-alt"></i>
                                        </span>
                                    </div>
                                    <p>
                                        <span className="color3">{props.info.p3}:</span>
                                        <p className="fw-bold py-2">{props.info.p4}</p>
                                    </p>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="border w-100 p-md-3 rounded mb-2 d-flex ps-5 pt-5">
                                    <div>
                                        <span className="pe-3 color2 fs-5">
                                            <i class="far fa-envelope"></i>
                                        </span>
                                    </div>
                                    <p>
                                        <span className="color3">{props.info.p5}:</span>
                                        <p className="fw-bold py-2">{props.info.p6}</p>
                                    </p>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="col-12 col-md-8 col-xl-6">
                        <div className="row g-3 bg-light p-md-5">
                            <div className="col-12">
                                <input type="text" className="form-control" placeholder="Your Name" aria-label="Your Name" style={{height: 50 + "px"}}/>
                            </div>
                            <div className="col-12">
                                <input type="text" className="form-control" placeholder="Your Email" aria-label="Your Email" style={{height: 50 + "px"}}/>
                            </div>
                            <div class="col-12">
                                <input type="text" className="form-control" placeholder="Subject" aria-label="Subject" style={{height: 50 + "px"}}/>
                            </div>
                            <div className="col-12">
                                <textarea type="text" className="form-control" placeholder="Message" aria-label="Message" style={{height: 150 + "px"}}/>
                            </div>
                            <div className="col-12" data-aos="flip-up">
                                <button type="submit" className="btn btn-primary px-5 py-3 rounded-1">{props.info.p7}</button>
                            </div>
                            </div>
                        </div>
                    </div>  
                    <div className="col-12 col-xl-1">

                    </div>             
            </div>

            <div className="container-fluid px-md-4 px-lg-4 px-xl-5 mb-5 ">
                <div className="row px-md-3 px-lg-4 px-xl-5">
                    <div className="col-12 px-xl-5 mb-5">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6511995.612850378!2d-124.59629283143707!3d37.16018041670666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1718131895802!5m2!1sen!2sin" width="100%" height="550" style={{border: 0 + "px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="px-xl-5"></iframe>
                    </div>
                </div>
            </div>
        </>  
    );
}
export default Contact;