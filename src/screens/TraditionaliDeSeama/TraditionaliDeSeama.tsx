import Gallery from "../../components/Gallery/Gallery";
import Title from "../../components/Title/Title";
import { StiriList } from "../../mockups";

const TraditionaliDeSeama = () => {
    return(
        <>
            <Title text="Tradiționali de seamă" />
            <Gallery items={StiriList} />
        </>
    )
}

export default TraditionaliDeSeama;