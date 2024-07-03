import ServicesCard from "./ServicesCard";

const OurServices = (props) =>{
    
    const servicesInfo = [
        {
            title:"Wedding Ceremony",
            desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        },
        {
            title:"City Transfer",
            desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        },
        {
            title:"Airport Transfer",
            desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        },
        {
            title:"Whole City Tour",
            desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        },
    ]

    return(
        <>
            <div className="container-fluid py-5 bg-white" id="ourServices">
                <div className="row px-md-3 px-xl-5 pt-xl-5">
                    <div className="col-12 text-center py-5 pb-xl-5 pt-xl-0">
                        <h6 className="text-uppercase color2 mt-5 mt-md-0">{props.info.title}</h6>
                        <h2 className="text-dark display-5 fw-semibold">{props.info.subTitle}</h2>
                    </div>
                    <div className="col-12 px-xl-5 pb-5">
                        <div className="row px-xl-5 g-3">
                            <div className="col-12 col-md-3 text-center">
                                <ServicesCard info1={servicesInfo[0].title} info2={servicesInfo[0].desc} />
                            </div>
                            <div className="col-12 col-md-3 text-center">
                                <ServicesCard info1={servicesInfo[1].title} info2={servicesInfo[1].desc} />
                            </div>
                            <div className="col-12 col-md-3 text-center">
                                <ServicesCard info1={servicesInfo[2].title} info2={servicesInfo[2].desc} />
                            </div>
                            <div className="col-12 col-md-3 text-center">
                                <ServicesCard info1={servicesInfo[3].title} info2={servicesInfo[3].desc} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>        
    );
}
export default OurServices;