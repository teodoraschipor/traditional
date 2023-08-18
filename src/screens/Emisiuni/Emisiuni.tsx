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
import Title from "../../components/Title/Title";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

const images = [
    {
        original: "https://firebasestorage.googleapis.com/v0/b/traditionaltv-84ca7.appspot.com/o/la-popasul-dorului.webp?alt=media&token=a743de20-07b6-49e1-a884-7f8ea1f8aea6",
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/traditionaltv-84ca7.appspot.com/o/la-popasul-dorului.webp?alt=media&token=a743de20-07b6-49e1-a884-7f8ea1f8aea6",
        originalTitle: "La popasul dorului cu Ovidiu Purdea Someș",
    },
    {
      original: "https://firebasestorage.googleapis.com/v0/b/traditionaltv-84ca7.appspot.com/o/dedicatii-muzicale.webp?alt=media&token=285f2301-7241-447e-8cad-b9bcca7023b5",
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/traditionaltv-84ca7.appspot.com/o/dedicatii-muzicale.webp?alt=media&token=285f2301-7241-447e-8cad-b9bcca7023b5",
      originalTitle: "Dedicații Muzicale",
    },
    {
      original: "https://firebasestorage.googleapis.com/v0/b/traditionaltv-84ca7.appspot.com/o/drag-de-viata-cu-doinasii.webp?alt=media&token=015f22e3-e163-4833-b694-a2fe756cd3e4",
      thumbnail: "https://firebasestorage.googleapis.com/v0/b/traditionaltv-84ca7.appspot.com/o/drag-de-viata-cu-doinasii.webp?alt=media&token=015f22e3-e163-4833-b694-a2fe756cd3e4",
      originalTitle: "Drag de viață cu Doinașii",
    },
    {
        original: "https://firebasestorage.googleapis.com/v0/b/traditionaltv-84ca7.appspot.com/o/in-pas-cu-traditia.webp?alt=media&token=e0af4fe7-403e-4139-9acb-71271ddd08aa",
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/traditionaltv-84ca7.appspot.com/o/in-pas-cu-traditia.webp?alt=media&token=e0af4fe7-403e-4139-9acb-71271ddd08aa",
        originalTitle: "În pas cu tradiția",
    },
    {
        original: "https://firebasestorage.googleapis.com/v0/b/traditionaltv-84ca7.appspot.com/o/portret-muzical.webp?alt=media&token=8af1993f-4f43-4e2e-85f1-de0c1fa15082",
        thumbnail:"https://firebasestorage.googleapis.com/v0/b/traditionaltv-84ca7.appspot.com/o/portret-muzical.webp?alt=media&token=8af1993f-4f43-4e2e-85f1-de0c1fa15082",
        originalTitle: "Portret Muzical",
    },
    {
        original: "https://firebasestorage.googleapis.com/v0/b/traditionaltv-84ca7.appspot.com/o/cu-iosif-pe-coclauri.webp?alt=media&token=ff4d5fea-6fcc-4e9a-8fec-ca21abf8a6f8",
        thumbnail:"https://firebasestorage.googleapis.com/v0/b/traditionaltv-84ca7.appspot.com/o/cu-iosif-pe-coclauri.webp?alt=media&token=ff4d5fea-6fcc-4e9a-8fec-ca21abf8a6f8",
        originalTitle: "Cu Iosif pe coclauri",
    },
];

const Emisiuni = () => {

    const defaultValue : any = [];
    const { loading, setLoading } = useContext(LoadingContext)
    const [emisiuni, setEmisiuni] = useState<any[]>([]);
    const [emisiuniLocalStorage, setEmisiuniLocalStorage]= useLocalStorage('EmisiuniList', defaultValue);
    const getStiriLocalStorage: any = localStorage.getItem("EmisiuniList");

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
                setEmisiuniLocalStorage(getEmisiuni)
                setLoading(false)
                })
            }
        }
        fetchData();
      }, [getStiriLocalStorage, setEmisiuniLocalStorage, setLoading])

        const renderItem = (item: ReactImageGalleryItem) => {
            return(
                <div>
                    <img className="image-gallery-image" src={item.original} title={item.originalTitle} alt={item.originalTitle} />
                    <span 
                    style={{ fontWeight: 'bold', textTransform: 'uppercase', background: '#b8000079', paddingLeft: '0', paddingRight: '0', bottom: '0', left: '0' }} 
                    className="image-gallery-description">{item.originalTitle}</span>
                </div>
            )
        }

    return(
        <>
            <HelmetProvider>
                <div>
                    <Helmet>
                        <title>Emisiuni - Tradițional TV</title>
                        <meta name="description" content="Emisiuni - Tradițional TV" />
                    </Helmet>
                </div>
            </HelmetProvider>
                <Title text="Emisiuni" />
            <div className="carousel-container">
                <ImageGallery 
                    items={images}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    showIndex={true}
                    renderItem={renderItem} />
            </div>
        </>
      )
}

export default Emisiuni;
