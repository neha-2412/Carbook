import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = (props) =>{

    const [counterState, setCounterState]  =  useState(false);

    return(
        <>
            <div className="container-fluid py-5 bg-light" id="counter">
                <div className="row p-md-3 p-lg-5">
                    <ScrollTrigger onEnter={()=>setCounterState(true)} onExit={() =>setCounterState(false)}>
                    <div className="col-12 ps-lg-5">
                        <div className="row ps-xl-5 text-center">
                             <div className="col-12 col-md-3 ps-xl-5 py-3 py-md-0 d-md-flex">
                                <span className="display-4 color2">
                                    {   
                                        counterState &&
                                        <CountUp start={0} end={props.info.p11} duration={4}></CountUp>
                                    }
                                </span>
                                <span className="pt-2 px-lg-3 fs-5">{props.info.p22} <br/> {props.info.p33}</span>
                            </div>
                            <div className="col-12 col-md-3 py-3 py-md-0 d-md-flex">
                                <span className="display-4 color2">
                                    {   
                                        counterState &&
                                        <CountUp start={0} end={props.info.p21} duration={3}></CountUp>
                                    }
                                </span>
                                <span className="pt-2 px-lg-3 fs-5">{props.info.p22} <br/> {props.info.p23}</span>
                            </div>
                            <div className="col-12 col-md-3 py-3 py-md-0 d-md-flex">
                                <span className="display-4 color2">
                                    {   
                                        counterState &&
                                        <CountUp start={0} end={props.info.p31} duration={3}></CountUp>
                                    }
                                </span>
                                <span className="pt-2 px-lg-3 fs-5">{props.info.p32} <br/> {props.info.p33}</span>
                            </div>
                            <div className="col-12 col-md-3 py-3 py-md-0 d-md-flex">
                                <span className="display-4 color2 ms-md-4">
                                    {   
                                        counterState &&
                                        <CountUp start={0} end={props.info.p41} duration={4}></CountUp>
                                    }
                                </span>
                                <span className="pt-2 px-lg-3 fs-5">{props.info.p42} <br/> {props.info.p43}</span>
                            </div>
                        </div>
                    </div>
                    </ScrollTrigger>
                </div> 
            </div>
        </>
    )
}
export default Counter;