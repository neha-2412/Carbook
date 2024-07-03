
const CarCard = (props) =>{
    return(
        <>
            <div className="card h-100 border-0 bg-white"  data-aos="zoom-in" data-aos-duration="2000">
                <img src={props.img} className="card-img-top c-img" alt="Image Not Found"/>
                    <div className="card-body p-4">
                        <h4>{props.info1}</h4>
                            <div className="d-flex justify-content-between">
                                <span className="color3">{props.info2}</span>
                                <p className="color2 pe-2">${props.info3}<span className="color3"> /day</span></p>
                            </div>
                            <p className='text-center'>
                                <button type='button' className='bg-color2 border-0 py-2 px-3 px-md-4 px-lg-3 px-xl-4 text-white rounded-1 me-2 me-lg-4 mb-lg-2 mb-xl-0'>{props.info4}</button>
                                <button type='button' className='bg-color1 border-0 py-2 px-4 px-md-5 px-lg-4 px-xl-5 text-white rounded-1'>{props.info5}</button>
                            </p>
                    </div>
            </div>
        </>
    );
}
export default CarCard;