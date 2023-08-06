import "./Emisiuni.scss"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import { useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import useLocalStorage from "../../hooks/useLocalStorage";
import { LoadingContext } from "../../App";
import Loader from "../../components/Loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import Title from "../../components/Title/Title";

const Emisiuni = () => {

    const defaultValue : any = [];
    const { loading, setLoading } = useContext(LoadingContext)
    const [emisiuni, setEmisiuni] = useState<any[]>([]);
    const [emisiuniLocalStorage, setEmisiuniLocalStorage]= useLocalStorage('EmisiuniList', defaultValue);
    const getStiriLocalStorage: any = localStorage.getItem("EmisiuniList");

    const [current, setCurrent] = useState(0);
    const [length, setLength] = useState(0);

    const nextSlide = () => {
        setLoading(true)
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setLoading(true)
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            if(getStiriLocalStorage)
            {
                setEmisiuni(getStiriLocalStorage!)
                setLoading(false)
            } else {
                const getEmisiuni : any[] = [];
                const querySnapshot = await getDocs(collection(db, "EmisiuniList"));
                querySnapshot.forEach((doc: any) => {
                for (const [key, value] of Object.entries(doc.data().EmisiuniList)) 
                    getEmisiuni.push(value)
                setEmisiuni(getEmisiuni);
                setLength(getEmisiuni.length);
                setEmisiuniLocalStorage(getEmisiuni)
                setLoading(false)
                })
            }
        }
        fetchData();
      }, [getStiriLocalStorage, setEmisiuniLocalStorage, setLoading])

      useEffect(() => {
        console.log('loading: ', loading)
      }, [loading])

        // if (!Array.isArray(emisiuni) || emisiuni.length <= 0) {
        //     return null;
        //     }

    return(
        <>
            <div style={{display: loading ? "block" : "none"}}>
                <Loader />
            </div>
            <div style={{display: loading ? "none" : "block"}}>
                    <Title text="Emisiuni" />
                    <section className='slider'>
                        <FontAwesomeIcon className='left-arrow' icon={faCircleArrowLeft} onClick={prevSlide} />
                        <FontAwesomeIcon className='right-arrow' icon={faCircleArrowRight} onClick={nextSlide} />
                        {emisiuni.map((slide, index) => {
                        return (
                            <div
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}
                            >
                            {index === current && (
                                <div>
                                    <img onLoad={() => {console.log('heeei'); setLoading(false)}} src={slide.imageSource} alt={slide.title} className='image' />
                                    <p className="slide-title">{slide.title}</p>
                                </div>
                            )}
                            </div>
                        );
                        })}
                    </section>
            </div>
        </>
      )
}

export default Emisiuni;
