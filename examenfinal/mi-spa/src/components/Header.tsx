import React from "react";
import{Link} from "react-router-dom";

const Header:React.FC=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Mis paises</Link>
                <div>
                    <Link className="nav-link d-inline me-2" to="/">Home</Link>
                    <Link className="nav-link d-inline me-2" to="/entities">Entities</Link>
                    <Link className="nav-link d-inline" to="/contact">Contact</Link>

                </div>
            </div>
        </nav>
    );
}
export default Header;