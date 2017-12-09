import {NavLink} from "react-router-dom";

export default class NavigationBar extends React.Component{
    render(){
        return(
            <div className="nav-cannon nav-bar">
                <div className="nav-content-container nav-content-container-1">
                    <div className="icon-logo"></div>
                    <div className="logo-name">
                        cloud<span className="logo-span">cannon</span>
                    </div>
                </div>
                <div className="nav-content-container nav-content-container-2">
                    <div className="nav-link-container nav-link-container-1">
                        <NavLink activeStyle="nav-link-active" to="/cannon/features" >Features</NavLink>
                    </div>
                    <div className="nav-link-container nav-link-container-2">
                        <NavLink activeStyle="nav-link-active" to="/cannon/pricing" >Pricing</NavLink>
                    </div>
                    <div className="nav-link-container nav-link-container-3">
                        <NavLink activeStyle="nav-link-active" to="/cannon/about" >About</NavLink>
                    </div>
                </div>
                <div className="nav-content-container nav-content-container-3">
                    <div className="user-container user-container-1">LOG IN</div>
                    <div className="user-container user-container-2">SING UP</div>
                </div>
                <div className="nav-content-container nav-content-container-4 nav-responsive-container">
                    <div className="responsive-container repsonsive-container-1">Features</div>
                    <div className="responsive-container repsonsive-container-2">Pricing</div>
                    <div className="responsive-container repsonsive-container-3">About</div>
                    <div className="responsive-container repsonsive-container-4">LOG IN</div>
                    <div className="responsive-container repsonsive-container-5">SING UP</div>
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
}