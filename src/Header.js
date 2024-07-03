import { Link } from "react-router-dom";

const Header = (props) =>{
    return(
         <div className="container-fluid bg-white position-fixed px-xl-5 py-1" id="header">
                <div className="row px-xl-5">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg px-xl-5" id="navbar">
                            <div className="container-fluid px-xl-5">
                            <a class="navbar-brand fw-bold text-uppercase" href="#">
                                {props.info.nav11}<span className="color1">{props.info.nav12}</span>
                            </a>
                            <button class="navbar-toggler border-0 text-dark fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto mb-lg-0 effect1">
                                    <li className="nav-item px-3">
                                        <Link className="nav-link text-dark" to="/Home">{props.info.nav2}</Link>
                                    </li>
                                    <li class="nav-item px-3">
                                        <Link className="nav-link text-dark" to="/About">{props.info.nav3}</Link>
                                    </li>
                                    <li class="nav-item px-3">
                                        <Link className="nav-link text-dark" to="/Services">{props.info.nav4}</Link>
                                    </li>
                                    <li class="nav-item px-3">
                                        <Link className="nav-link text-dark" to="/Cars">{props.info.nav5}</Link>
                                    </li>
                                    <li class="nav-item px-3">
                                        <Link className="nav-link text-dark" to="/Blog">{props.info.nav6}</Link>
                                    </li>
                                    <li class="nav-item px-3">
                                        <Link className="nav-link text-dark" to="/Contact">{props.info.nav7}</Link>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        
    );
}
export default Header;