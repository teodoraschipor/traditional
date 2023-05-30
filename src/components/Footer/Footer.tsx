import "./Footer.scss"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import AppText from "../AppText/AppText";
import { footerSections } from "../../mockups";
import { getRoutePath } from "../../routes/routes-utils";
import { TraditionalTvRoutesNames } from "../../routes/routes-names";

const Footer = () => {
    const displayFooterSections = () => {
        return footerSections.map((item) => (
            <div className="footer-section" key={item.title}>
                <AppText text={item.title} className="footer-section_title" />
                {item.section.map((section) => (
                    section.type === "url" ? <Link to={section.path} className="field" key={section.path}>{section.name}</Link> : <a href={section.path} className="field" key={section.path}>{section.name}</a>
                ))}
            </div>
        ))
    }

    return(
    <div className="footer">
        <Link to={getRoutePath(TraditionalTvRoutesNames.ACASA)}><img src={logo} className="footer-logo" alt="logo" /></Link>
        {displayFooterSections()}
    </div>)
}

export default Footer;