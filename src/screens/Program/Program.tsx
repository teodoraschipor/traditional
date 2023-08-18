import Title from "../../components/Title/Title";
import { LoadingContext } from '../../App';
import { useContext, useEffect } from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";

const Program = () => {
    
    const { loading, setLoading } = useContext(LoadingContext)

    useEffect(() => {
        setLoading(false)
    }, [setLoading])
    return(
        <>
            <HelmetProvider>
                <div>
                    <Helmet>
                        <title>Program - Tradițional TV</title>
                        <meta name="description" content="Program - Tradițional TV" />
                    </Helmet>
                </div>
            </HelmetProvider>
            <Title text="Program" />
            <br/>
            In curând veți putea viziona detalii despre programul Tradițional TV!
        </>
    );
}

export default Program;