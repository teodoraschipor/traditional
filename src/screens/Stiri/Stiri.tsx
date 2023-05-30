import "./Stiri.scss"
import Title from "../../components/Title/Title";
import { useLocation } from "react-router-dom";
import { getRoutePath } from "../../routes/routes-utils";
import { TraditionalTvRoutesNames } from "../../routes/routes-names";
import Gallery from "../../components/Gallery/Gallery";
import { StiriList } from "../../mockups";

const Stiri = () => {

    const location = useLocation();

    return(
        <>
            {location.pathname === getRoutePath(TraditionalTvRoutesNames.STIRI) && <Title text="Știri" />}
            <Gallery items={StiriList} />
        </>
    )
}

export default Stiri;