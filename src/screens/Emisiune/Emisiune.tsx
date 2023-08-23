import React, { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import "./Stire.scss";
import { useParams } from "react-router-dom";
import { IEmisiune, IStire } from "../../TypesInterfaces";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useContext } from "react";
import { LoadingContext } from "../../App";

const HtmlToReactParser = require('html-to-react').Parser;

const Emisiune = () => {
    
    const { id } = useParams();
    const [emisiune, setEmisiune] = useState<IEmisiune>({id: 0, title: "", image: "", author: "", content: ""});
    const htmlToReactParser = new HtmlToReactParser();

    const { loading, setLoading } = useContext(LoadingContext)

    useEffect(() => {
        setLoading(false)
    }, [setLoading])

    return(
        <>
            <HelmetProvider>
                <div>
                    <Helmet>
                        <title>Emisiune - Tradițional TV</title>
                        <meta name="description" content="Emisiune - Tradițional TV" />
                    </Helmet>
                </div>
            </HelmetProvider>
            <Title text={emisiune?.title} />
            <div className="emisiune-content">
                {htmlToReactParser.parse(emisiune.content)}
            </div>
            <p className="author">Articol realizat de {emisiune.author}</p>
        </>
    );
}

export default Emisiune;