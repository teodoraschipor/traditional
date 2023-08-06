import { useNavigate } from "react-router-dom";
import "./HomeGallery.scss";

const HomeGallery = (props: any) => {
    
    const navigate = useNavigate();

    const displayFirst = (items: any) => {
        return items.map((item: any, index: number) => {
            if(index === 0)
                return <div id={`div${index.toString()}`} className="home-gallery_primary_item" onClick={() => navigate('/stiri/0')} key={index}>
                        <p className="home-gallery_primary_item-title">{item.title}</p>
                    </div>
        })
    }

    const displaySecond = (items: any) => {
        return items.map((item: any, index: number) => {
            if(index !== 0) {
                return <div id={`div${index.toString()}`} className="home-gallery_secondary_item" onClick={() => navigate(`/stiri/${index}`)} key={index}>
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