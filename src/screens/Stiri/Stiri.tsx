import "./Stiri.scss"
import Title from "../../components/Title/Title";
import { useLocation } from "react-router-dom";
import { getRoutePath } from "../../routes/routes-utils";
import { TraditionalTvRoutesNames } from "../../routes/routes-names";
import Gallery from "../../components/Gallery/Gallery";
import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../../App";
import { db } from "../../firebase/config";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Stiri = () => {

    const location = useLocation();
    const { loading, setLoading } = useContext(LoadingContext)
    const [stiri, setStiri] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            const getStiri : any[] = [];
            const newsRef = db.collection("StiriList1");
            newsRef.orderBy('date', 'desc').limit(10).get().then((querySnapshot) => {
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
      }, [setLoading])

    return(
        <>
            <HelmetProvider>
                <div>
                    <Helmet>
                        <title>Știri - Tradițional TV</title>
                        <meta name="description" content="Știri - Tradițional TV" />
                    </Helmet>
                </div>
            </HelmetProvider>
            {location.pathname === getRoutePath(TraditionalTvRoutesNames.STIRI) && <Title text="Știri" />}
            <Gallery items={stiri} />
        </>
    )
}

export default Stiri;