import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useContext, useEffect } from "react";
import { LoadingContext } from "../../App";
import Title from '../../components/Title/Title';

const Echipa = () => {
    const { loading, setLoading } = useContext(LoadingContext)

    useEffect(() => {
        setLoading(false)
    }, [setLoading])
    return(
        <>
            <HelmetProvider>
                <div>
                    <Helmet>
                        <title>Echipa - Tradițional TV</title>
                        <meta name="description" content="Echipa - Tradițional TV" />
                    </Helmet>
                </div>
            </HelmetProvider>
            <Title text="Echipa" />
            <p>...Pagină în construcție...</p>
        </>
    )
}

export default Echipa;