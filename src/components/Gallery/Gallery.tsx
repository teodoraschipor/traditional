import GalleryItem from "../GalleryItem/GalleryItem";
import "./Gallery.scss"
import { IGalleryItem } from "../../TypesInterfaces";
import { getRoutePath } from "../../routes/routes-utils";
import { TraditionalTvRoutesNames } from "../../routes/routes-names";
import { useLocation } from "react-router-dom";

const Gallery = (props: any) => {
    let limit = 3;
    const location = useLocation();
    
    const display = (item: IGalleryItem, index: number) => {
        if(index > limit) 
            limit += 4;
        return <GalleryItem id={index} imageSource={item.imageSource} title={item.title} onClick={(location.pathname === getRoutePath(TraditionalTvRoutesNames.STIRI)
                    || location.pathname === getRoutePath(TraditionalTvRoutesNames.ACASA)) && true} key={index} />
    }

    return(
        <div className="gallery">
            {props.items.map((item: IGalleryItem, index: number) => 
                <div className="column" key={index}>
                    {display(item, index)}
                </div>)
            }
        </div>
    )
}

export default Gallery;