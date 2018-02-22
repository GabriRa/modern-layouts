import {NavLink} from "react-router-dom";

export default function NavigationBar(){

    var navLinks = ["features", "pricing", "about"],
        userLinks = ["log in", "sing up"],
        responsiveLinks = ["Features", "Pricing", "About", "LOG IN", "SING UP"];

    return(
        <div className="nav-cannon nav-bar">

            <div className="nav-content-container nav-content-container-1">
                <div className="icon-logo"></div>
                <div className="logo-name">
                    <a href="https://cloudcannon.com/" target="_about">
                        cloud<span className="logo-span">cannon</span>
                    </a>
                </div>
            </div>

            <div className="nav-content-container nav-content-container-2">
                { navLinks.map( (link, index) =>
                    <div className={`nav-link-container nav-link-container-${index+1}`}>
                        <NavLink activeStyle="nav-link-active" to={`/cannon/${link}`} > {link} </NavLink>
                    </div>
                )}
            </div>

            <div className="nav-content-container nav-content-container-3">
                { userLinks.map( (link, index) => 
                    <div className={`user-container user-container-${index+1}`}>{Link}</div>
                )}
            </div>

            <div className="nav-content-container nav-content-container-4 nav-responsive-container">
                { responsiveLinks.map( (link, index) =>
                    <div className={`responsive-container repsonsive-container-${index+1}`}>{link}</div>
                )}
            </div>
            
            <div className="nav-responsive-button" onClick={ e => {
                    document.querySelector(".hamburger").classList.toggle("is-active");
                    document.querySelector(".nav-responsive-container").classList.toggle("hide-menu");
                }}>
                <button class="hamburger hamburger--spin" type="button">
                    <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                    </span>
                </button>  
            </div>


        </div>
    )
}