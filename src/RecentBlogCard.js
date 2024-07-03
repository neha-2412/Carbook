
const RecentBlogCard = (props) =>{
    return(
        <>
           <div className="card border-0" data-aos="zoom-in" data-aos-duration="1000">
                <img src={props.img} class="card-img-top rounded-0 b-img" alt="Image Not Found"/>
                <div className="card-body">
                    <div className="d-flex justify-content-start align-items-center">
                    <div>
                        <a href="#" className="color2 text-decoration-none fw-semibold">Oct. 29, 2019</a>
                    </div>
                    <div className="mx-2 mx-lg-3">
                        <a href="#" className="color2 text-decoration-none fw-semibold">Admin</a>
                    </div>
                    <div>
                        <a href="#" className="color2 text-decoration-none fw-semibold"><i class="far fa-comment-dots"></i><span>3</span></a>
                    </div>
                    </div>
                    <h4 className="py-3">{props.info1}</h4>
                    <p>
                        <button type='button' className='bg-color2 border-0 py-2 px-4 text-white rounded-1'>{props.info2}</button>
                    </p>
                </div>
            </div> 
        </>
    );
}
export default RecentBlogCard;