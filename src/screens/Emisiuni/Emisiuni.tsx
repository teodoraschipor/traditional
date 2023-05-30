import "./Emisiuni.scss"
import Title from "../../components/Title/Title";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import teo from "../../assets/4.jpg"
import 'swiper/css/effect-fade';

const Emisiuni = () => {

    return(
        <>
            <Title text="Emisiuni" />
            <Swiper
            style={{"marginTop": "30px", "zIndex": "0", "height": "500px"}}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            centeredSlides={true}
            navigation
            pagination={{ clickable: true }}
            updateOnWindowResize={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            breakpoints={{
                900: {
                    height: 700
                }
            }}
            >
                <SwiperSlide><img src={teo} /></SwiperSlide>
                <SwiperSlide><img src={teo}  /></SwiperSlide>
                <SwiperSlide><img src={teo} /></SwiperSlide>
                <SwiperSlide><img src={teo} /></SwiperSlide>
            </Swiper>
        </>
    )
}

export default Emisiuni;