import { Helmet, HelmetProvider } from 'react-helmet-async';

const Echipa = () => {
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
            <p>...Pagină în construcție...</p>
        </>
    )
}

export default Echipa;