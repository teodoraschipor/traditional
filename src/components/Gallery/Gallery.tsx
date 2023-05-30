import GalleryItem from "../GalleryItem/GalleryItem";
import "./Gallery.scss"
import { IGallery } from "../../TypesInterfaces";
import teo from "../../assets/2.jpg"
import { getRoutePath } from "../../routes/routes-utils";
import { TraditionalTvRoutesNames } from "../../routes/routes-names";
import { useLocation } from "react-router-dom";

const Gallery = (props: IGallery) => {
    let limit = 3;
    const location = useLocation();
    
    return(
        <div className="gallery">
            {props.items.map((array, index) => <div className="column" key={index}>
                {array.map((item, index) => (index <= limit) ? 
                <GalleryItem id={item.id} imageSource={teo} title={item.title} 
                onClick={(location.pathname === getRoutePath(TraditionalTvRoutesNames.STIRI)
                    || location.pathname === getRoutePath(TraditionalTvRoutesNames.ACASA)) && true} key={item.id} /> : limit += 4)}

            </div>)}
        </div>
    )
}

export default Gallery;