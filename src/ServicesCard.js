const ServicesCard = (props) =>{
    return(
        <>
            <div className="card border-0 d-flex justify-content-center align-items-center pt-4"  data-aos="zoom-in" data-aos-duration="2000">
                <div className="card-icon border rounded-circle s-icon bg-color2 d-flex justify-content-center align-items-center">
                        <a><i class="fas fa-car text-white fs-1"></i></a>
                </div>
                <div className="card-body">
                    <h5 className="card-title py-1">{props.info1}</h5>
                    <p class="card-text px-3 color3">{props.info2}</p>
                </div>
            </div>
        </>
    );
}
export default ServicesCard;