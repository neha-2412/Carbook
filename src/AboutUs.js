
const AboutUs = (props) =>{
    return(
        <>
            <div className='container-fluid ps-xl-5 bg-white' id='aboutUs'>
                <div className='row ps-xl-5'>
                    <div className='col-12 ps-xl-5'>
                        <div className='row ps-xl-5'>
                            <div className='col-12 col-md-5 col-lg-4 py-3 py-md-5 mt-md-5 py-lg-4 px-lg-4 py-xl-3'>
                                <img src={props.info.img} alt="Image Not Found" className="a-img img-fluid mt-md-3 mt-lg-0"/>
                            </div>
                            <div className='col-12 col-md-7 col-lg-8 bg-color1 p-3 p-md-4 p-lg-5'>
                                <h6 className="text-uppercase text-white">{props.info.p1}</h6>
                                <h2 className="text-white py-3 fs-1 fw-bold">{props.info.p2}</h2>
                                <p className="text-white">{props.info.p3}</p>
                                <p className="text-white pb-3">{props.info.p4}</p>
                                <button type='button' className='bg-color2 border-0 py-3 px-4 text-white rounded-1'>{props.info.btn}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AboutUs;