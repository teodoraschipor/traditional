import { Helmet, HelmetProvider } from 'react-helmet-async';
import Title from "../../components/Title/Title";

const DespreComunitate = () => {
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