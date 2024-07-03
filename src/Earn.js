const Earn = (props) =>{
    return(
        <>
            <div className="container-fluid pb-5 vh-50" id="earn">
                <div className="row py-5 py-md-3 p-lg-5">
                    <div className="col-12 col-md-6 p-xl-4">
                        <h2 className="text-white fw-bold px-5 lh-base display-6" data-aos="flip-up">{props.info.p1}</h2>
                        <button type='button' className='bg-color2 border-0 py-2 px-4 text-white rounded-1 ms-5'>{props.info.p2}</button>
                    </div>
                    <div className="col-6">
                       
                    </div>
                </div> 
            </div>
        </>
    )
}
export default Earn;