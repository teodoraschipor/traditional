import { Helmet, HelmetProvider } from 'react-helmet-async';
import Title from "../../components/Title/Title";
import { useContext, useEffect } from "react";
import { LoadingContext } from "../../App";

const TraditionaliDeSeama = () => {
    const { loading, setLoading } = useContext(LoadingContext)

    useEffect(() => {
        setLoading(false)
    }, [setLoading])
    return(
        <>
            <HelmetProvider>
                <div>
                    <Helmet>
                        <title>Tradiționali de seamă - Tradițional TV</title>
                        <meta name="description" content="Tradiționali de seamă - Tradițional TV" />
                    </Helmet>
                </div>
            </HelmetProvider>
            <Title text="Tradiționali de seamă" />
            <p>...Pagină în construcție...</p>
        </>
    )
}

export default TraditionaliDeSeama;