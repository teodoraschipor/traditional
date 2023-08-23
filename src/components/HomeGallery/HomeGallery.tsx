import { useNavigate } from "react-router-dom";
import "./HomeGallery.scss";
import { useState } from "react";

const HomeGallery = (props: any) => {
    
    const navigate = useNavigate();
    const [mouseEnter, setMouseEnter] = useState<string>();

    const handleOnMouseOver = (id: string) => {
        setMouseEnter(id);
    }

    const handleOnMouseLeave = () => {
        setMouseEnter("");
    }

    const displayFirst = (items: any) => {
        return items.map((item: any, index: number) => {
            if(index === 0)
                return <div 
                id={`div${index.toString()}`} 
                className="home-gallery_primary_item" 
                onClick={() => navigate(`/stiri/${item.title}`)} 
                key={index} 
                onMouseOver={() => handleOnMouseOver(`div${index.toString()}`)}
                onMouseLeave={() => handleOnMouseLeave()}
                style={{backgroundImage: 
                    mouseEnter === `div${index.toString()}` 
                    ? 
                    `linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 24%, rgba(255,255,255,0) 41%), url(${item.imageSource})` 
                    : 
                    `linear-gradient(0deg, rgb(21, 21, 21) 4%, rgba(21, 21, 21, 0.659) 31%, rgba(255,255,255,0) 49%), url(${item.imageSource})`}}>
                        <p className="home-gallery_primary_item-title">{item.title}</p>
                    </div>
        })
    }

    const displaySecond = (items: any) => {
        return items.map((item: any, index: number) => {
            if(index !== 0) {
                return <div 
                id={`div${index.toString()}`} 
                className="home-gallery_secondary_item" 
                onClick={() => navigate(`/stiri/${item.title}`)} 
                key={index} 
                onMouseOver={() => handleOnMouseOver(`div${index.toString()}`)}
                onMouseLeave={() => handleOnMouseLeave()}
                style={{backgroundImage: 
                    mouseEnter === `div${index.toString()}` 
                    ? 
                    `linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 24%, rgba(255,255,255,0) 41%), url(${item.imageSource})` 
                    : 
                    `linear-gradient(0deg, rgb(21, 21, 21) 4%, rgba(21, 21, 21, 0.659) 31%, rgba(255,255,255,0) 49%), url(${item.imageSource})`}}>
                            <p className="home-gallery_secondary_item-title">{item.title}</p>
                        </div>
            }
        })
    }

    return(
        <div className="home-gallery">
            {displayFirst(props.items)}
            <div className="home-gallery_secondary">
                {displaySecond(props.items)}
            </div>
        </div>
    )
}

export default HomeGallery;