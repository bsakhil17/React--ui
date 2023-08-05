import { CDN_LOGO } from "../utills/constants";

const Header = ()=>{
    return  (
        <div className="header">
        <div className="logo-header">
           <img className="logo" src={CDN_LOGO}></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>contact us</li>
                <li>cart</li>
                
            </ul>
        </div>
        </div>
    )
} 

export default Header;