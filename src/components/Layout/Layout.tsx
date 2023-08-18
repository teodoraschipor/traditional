import { PropsWithChildren, useContext } from "react";
import "./Layout.scss"
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { getRoutePath } from "../../routes/routes-utils";
import { TraditionalTvRoutesNames } from "../../routes/routes-names";
import { LoadingContext } from "../../App";
import Loader from "../Loader/Loader";
import sponsor from "../../assets/romvac.webp"

const Layout = ({ children }: PropsWithChildren<{}>) => {
    const location = useLocation();
    const { loading, setLoading } = useContext(LoadingContext)
    const navigate = useNavigate();

    return(
        <div className="page">
            <Header />
            <div className={"page-content" + ((location.pathname === getRoutePath(TraditionalTvRoutesNames.ACASA)) ? " acasa" : "")}>
            <div style={{display: loading ? "block" : "none"}}>
                <Loader />
            </div>
            <div style={{display: loading ? "none" : "block"}}>
                {children}
            </div>
            </div>
            <img src={sponsor} alt="Romvac" className="sponsor" onClick={() => window.open('https://www.romvac.ro/')} />
            <button className="pushable">
                <span className="front" onClick={() => navigate("/live")}>
                    LIVE
                </span>
            </button>
            <Footer />
        </div>
    )
}

export default Layout;