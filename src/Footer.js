const Footer = (props) =>{
    return(
        <div className="container-fluid bg-dark py-5 px-xl-5">
           <div className="row p-xl-5">
                <div className="col-12 px-xl-5">
                    <div className="row px-xl-5">
                        <div className="col-12 col-md-6 col-lg-3">
                            <ul class="list-group list-group-flush">
                                <li className="list-group-item border-0 bg-dark" data-aos="flip-up"><h5 className="text-white">{props.info.head11}<span className="color1">{props.info.head12}</span></h5></li>
                                <li className="list-group-item border-0 bg-dark"></li>
                                <li className="list-group-item border-0 bg-dark"><p className="text-light">{props.info.para}</p></li>
                            </ul>
                            <div className="col-12 ps-0">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item border-0 py-5 bg-dark">
                                    <i className="fab fa-twitter text-white ficon" data-aos="fade-up" data-aos-duration="500"></i>
                                    <i className="fab fa-facebook-f text-white ficon" data-aos="fade-up" data-aos-duration="1000"></i>
                                    <i className="fab fa-instagram text-white ficon" data-aos="fade-up" data-aos-duration="1500"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 ps-lg-5">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item border-0 bg-dark"><h5 class="text-white">{props.info.head2}</h5></li>
                                <li className="list-group-item border-0 bg-dark"></li>
                                <li className="list-group-item border-0 text-light bg-dark">{props.info.li11}</li>
                                <li className="list-group-item border-0 text-light bg-dark">{props.info.li12}</li>
                                <li className="list-group-item border-0 text-light bg-dark">{props.info.li13}</li>
                                <li className="list-group-item border-0 text-light bg-dark">{props.info.li14}</li>
                                <li className="list-group-item border-0 text-light bg-dark">{props.info.li15}</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 ps-lg-5">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item border-0 bg-dark"><h5 class="text-white">{props.info.head3}</h5></li>
                                <li className="list-group-item border-0 bg-dark"></li>
                                <li className="list-group-item border-0 text-light bg-dark">{props.info.li21}</li>
                                <li className="list-group-item border-0 text-light bg-dark">{props.info.li22}</li>
                                <li className="list-group-item border-0 text-light bg-dark">{props.info.li23}</li>
                                <li className="list-group-item border-0 text-light bg-dark">{props.info.li24}</li>
                                <li className="list-group-item border-0 text-light bg-dark">{props.info.li25}</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 ps-lg-5">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item border-0 bg-dark"><h5 class="text-white">{props.info.head4}</h5></li>
                                <li className="list-group-item border-0 bg-dark"></li>
                                <li className="list-group-item border-0 text-light bg-dark"><i className="fas fa-map-marker-alt pe-2 text-white"></i>{props.info.li31}</li>
                                <li className="list-group-item border-0 text-light bg-dark"><i className="fas fa-phone-alt"></i> {props.info.li32}</li>
                                <li className="list-group-item border-0 text-light bg-dark"><i className="fas fa-envelope pe-2 text-white"></i>{props.info.li33}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 text-center pt-5">
                    <p class="text-light">{props.info.copy} <i className="fas fa-heart color1"></i> by Neha.</p>
                    </div>
                </div>
           </div>
        </div>
    );
}
export default Footer;