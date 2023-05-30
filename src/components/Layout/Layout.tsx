import { PropsWithChildren } from "react";
import "./Layout.scss"
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }: PropsWithChildren<{}>) => {
    return(
        <div className="page">
            <Header />
            <div className="page-content">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;