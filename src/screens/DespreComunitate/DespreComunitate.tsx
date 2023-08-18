import { Helmet, HelmetProvider } from 'react-helmet-async';
import Title from "../../components/Title/Title";
import { useContext, useEffect } from "react";
import { LoadingContext } from "../../App";

const DespreComunitate = () => {
    const { loading, setLoading } = useContext(LoadingContext)

    useEffect(() => {
        setLoading(false)
    }, [setLoading])
    return(
        <>
            <HelmetProvider>
                <div>
                    <Helmet>
                        <title>Despre comunitate - Tradițional TV</title>
                        <meta name="description" content="Despre comunitate - Tradițional TV" />
                    </Helmet>
                </div>
            </HelmetProvider>
            <Title text="Despre comunitate" />
            <p>...Pagină în construcție...</p>
        </>
    )
}

export default DespreComunitate;