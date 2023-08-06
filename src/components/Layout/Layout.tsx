import { PropsWithChildren } from "react";
import "./Layout.scss"
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { getRoutePath } from "../../routes/routes-utils";
import { TraditionalTvRoutesNames } from "../../routes/routes-names";

const Layout = ({ children }: PropsWithChildren<{}>) => {
    const location = useLocation();
    const navigate = useNavigate();

    return(
        <div className="page">
            <Header />
            <div className={"page-content" + ((location.pathname === getRoutePath(TraditionalTvRoutesNames.ACASA)) ? " acasa" : "")}>
                {children}
            </div>
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