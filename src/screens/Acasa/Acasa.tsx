import Title from "../../components/Title/Title";
import { useLocation } from "react-router-dom";
import { getRoutePath } from "../../routes/routes-utils";
import { TraditionalTvRoutesNames } from "../../routes/routes-names";
import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../../App";
import { db } from "../../firebase/config";
import HomeGallery from "../../components/HomeGallery/HomeGallery";
import "./Acasa.scss"
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Acasa = () => {

    const location = useLocation();
    const { loading, setLoading } = useContext(LoadingContext)
    const [stiri, setStiri] = useState<any[]>([]);
    const getStiriLocalStorage = localStorage.getItem("StiriList1");

    useEffect(() => {
        if(getStiriLocalStorage) {
            localStorage.removeItem("StiriList1")
        }
        const fetchData = async() => {
            setLoading(true);
            const getStiri : any[] = [];
            const newsRef = db.collection("StiriList1");
            newsRef.orderBy('date', 'desc').limit(3).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const title = doc.data().title;
                    const imageSource = doc.data().imageSource;
                    getStiri.push({title, imageSource})
                })
                setStiri(getStiri);
                setLoading(false);
            })
        }
        fetchData();
      }, [])

    return(
        <>
            <HelmetProvider>
                <div>
                    <Helmet>
                        <title>Tradițional TV - Fii tradițional!</title>
                        <meta name="description" content="Tradițional TV oferă telespectatorilor noutăți muzicale, emisiuni interactive și talk show-uri cu artiștii consacrați" />
                    </Helmet>
                </div>
            </HelmetProvider>
            {location.pathname === getRoutePath(TraditionalTvRoutesNames.ACASA) && <Title text="Acasă" />}
            <HomeGallery items={stiri} />
            {/* <div className="test"></div> */}
        </>
    )
}

export default Acasa;