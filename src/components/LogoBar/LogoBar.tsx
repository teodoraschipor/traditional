import "./LogoBar.scss"
import logo from "../../assets/logo.webp"
import { Link } from "react-router-dom";
import { getRoutePath } from "../../routes/routes-utils";
import { TraditionalTvRoutesNames } from "../../routes/routes-names";

const LogoBar = () => {
    return(
        <div className="logo-bar">
            <Link to={getRoutePath(TraditionalTvRoutesNames.ACASA)}><img className="logo-icon" src={logo} alt="logo" /></Link>
        </div>
    )
}

export default LogoBar;