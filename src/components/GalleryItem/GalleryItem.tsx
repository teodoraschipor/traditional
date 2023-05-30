import { useLocation, useNavigate } from "react-router-dom";
import { IGalleryItem } from "../../TypesInterfaces";
import AppText from "../AppText/AppText";
import "./GalleryItem.scss"
import { getRoutePath } from "../../routes/routes-utils";
import { TraditionalTvRoutesNames } from "../../routes/routes-names";
import { useState } from "react";

const GalleryItem = (props: IGalleryItem) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [focus, setFocus] = useState(false);
    return(
        <div className={"gallery-item " + (focus && "focus")} onClick={() => {
            if(location.pathname === getRoutePath(TraditionalTvRoutesNames.ACASA || location.pathname === getRoutePath(TraditionalTvRoutesNames.STIRI)))
                navigate(`/stiri/${props.id}`)
            else if(location.pathname === getRoutePath(TraditionalTvRoutesNames.TRADITIONALIDESEAMA))
                setFocus(true)
        }}>
            <img src={props.imageSource} className="gallery-item_image" alt={props.title} />
            <AppText text={props.title} className={"gallery-item_title"} />
        </div>
    )
}

export default GalleryItem;