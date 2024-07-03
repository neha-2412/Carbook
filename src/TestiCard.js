
const TestiCard = (props) =>{
    return(
        <>
            <div className="card border-0 d-flex justify-content-center align-items-center pt-4">
                <img src={props.img} class="card-img-top img-fluid rounded-circle w-50 h-50" alt="Image Not Found"/>
                <div className="card-body text-center">
                    <p className="px-3 py-4 color3">{props.info1}</p>
                    <p className="text-dark fw-semibold fs-5">{props.info2}</p>
                    <span className="color2">{props.info3}</span>     
                </div>
            </div>
        </>
    );
}
export default TestiCard;