import Title from "../../components/Title/Title";
import { useLocation } from "react-router-dom";
import { getRoutePath } from "../../routes/routes-utils";
import { TraditionalTvRoutesNames } from "../../routes/routes-names";
import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../../App";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import useLocalStorage from "../../hooks/useLocalStorage";
import HomeGallery from "../../components/HomeGallery/HomeGallery";
import "./Acasa.scss"
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Acasa = () => {

    const defaultValue : any = [];
    const location = useLocation();
    const { loading, setLoading } = useContext(LoadingContext)
    const [stiri, setStiri] = useState<any[]>([]);
    const [stiriLocalStorage, setStiriLocalStorage]= useLocalStorage('UltimeleStiriList', defaultValue);
    const getStiriLocalStorage: any = localStorage.getItem("UltimeleStiriList");

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            if(getStiriLocalStorage)
            {
                setStiri(getStiriLocalStorage!)
                setLoading(false)
            } else {
                const getStiri : any[] = [];
                const querySnapshot = await getDocs(collection(db, "UltimeleStiriList"));
                querySnapshot.forEach((doc: any) => {
                for (const [key, value] of Object.entries(doc.data().UltimeleStiriList)) 
                    getStiri.push(value)
                setStiri(getStiri);
                setLoading(false);
                setStiriLocalStorage(getStiri)
                })
            }
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