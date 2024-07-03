const Hero = (props) =>{
    return(
        <div className="container-fluid py-3 px-md-4 px-xl-5 d-flex flex-column justify-content-end align-items-start" id="hero">
            <div className="row p-md-5">
                <div className="col-12 px-xl-5">
                <nav style={{'--bs-breadcrumb-divider': "'>'"}} aria-label="breadcrumb" className="px-xl-5">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item text-uppercase"><a href="/home.js" className="text-decoration-none color1">{props.info.p1}</a></li>
                        <li class="breadcrumb-item active text-uppercase" aria-current="page">{props.info.p2}</li>
                    </ol>
                </nav>
                <h1 className="text-white px-xl-5 display-5" data-aos="flip-up">{props.info.p3}</h1>
                </div>
            </div> 
        </div>
    );
}
export default Hero;