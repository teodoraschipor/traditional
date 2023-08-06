import "./Carousel.scss";
import { useEffect, useState } from "react";
import arrowleft from "../../assets/arrow-left.svg";
import arrowright from "../../assets/arrow-right.svg";
import { EmisiuniList } from "../../mockups";
import { IGalleryItem } from "../../TypesInterfaces";

const Carousel = () => {

    const [carouselItems, setCarouselItems] = useState<IGalleryItem[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setCarouselItems(EmisiuniList)
    }, [])

    /**
     * function for carousel sliding when clicking the left arrow
     */
    const clickLeft = () => {
        if(currentIndex === 0) {
            return setCurrentIndex(carouselItems.length - 1);
        }
        return setCurrentIndex(currentIndex - 1);
    }

    /**
     * function for carousel sliding when clicking the right arrow
     */
    const clickRight = () => {
        if(currentIndex === carouselItems.length - 1) {
            return setCurrentIndex(0);
        }
        return setCurrentIndex(currentIndex + 1);
    }
    
    return (
        <div className="carousel">

            <img className="carousel__arrow" src={arrowleft} alt="arrow" onClick={clickLeft}/>

            {carouselItems.map((item: any, index: number) => {
                return <div className="carousel__item" style={{transform: `translate(-${currentIndex * 100}%)`}} key={index}>
                        <div className="carousel__item__photo">
                            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt={item.title} />
                            <div className="carousel__item__photo__details">
                                <p>{item.title}</p>
                            </div>
                        </div>
                    </div>
            })}

            <img className="carousel__arrow" src={arrowright} alt="arrow" onClick={clickRight}/>
        </div>
    );
}

export default Carousel;