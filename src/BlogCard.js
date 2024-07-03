
const BlogCard = (props) =>{
    return(
        <>
           <div className="card border-0" data-aos="zoom-in" data-aos-duration="2000">
                <img src={props.img} className="card-img-top img-fluid" alt="Image Not Found"/>
                    <div className="card-body text-center">
                        <div className="d-flex justify-content-center align-items-center">
                            <div>
                                <a href="#" className="color2 text-decoration-none fw-semibold">Oct. 29, 2019</a>
                            </div>
                            <div className="mx-3">
                                <a href="#" className="color2 text-decoration-none fw-semibold">Admin</a>
                            </div>
                            <div>
                                <a href="#" className="color2 text-decoration-none fw-semibold"><i class="far fa-comment-dots"></i><span>3</span></a>
                            </div>
                        </div>
                        <h4 className="py-3">{props.info1}</h4>
                        <p className="color3 px-xl-5 fw-semibold">{props.info2}</p>
                        <p>
                            <button type='button' className='bg-color2 border-0 py-2 px-4 text-white rounded-1'>{props.info3} <i class="fas fa-long-arrow-alt-right"></i></button>
                        </p>
                    </div>
            </div>
        </>
    );
}
export default BlogCard;