import React, { useContext, useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import "./Stire.scss";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { LoadingContext } from "../../App";
import useLocalStorage from "../../hooks/useLocalStorage";
import Loader from "../../components/Loader/Loader";
import { Helmet, HelmetProvider } from 'react-helmet-async';
const HtmlToReactParser = require('html-to-react').Parser;

const Stire = () => {
    
    const defaultValue : any = [];
    const { id } = useParams();
    const { loading, setLoading } = useContext(LoadingContext)
    const htmlToReactParser = new HtmlToReactParser();
    const getStiriLocalStorage : any = localStorage.getItem("StiriListContent")
    const [stiriLocalStorage, setStiriLocalStorage]= useLocalStorage('StiriList', defaultValue);
    const [searchStire, setSearchStire] = useState<any>({});

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            if(getStiriLocalStorage)
            {
                setSearchStire(getStiriLocalStorage[parseInt(id!)])
                setLoading(false)
            } else {
                const getStiri : any[] = [];
                const querySnapshot = await getDocs(collection(db, "StiriListContent"));
                querySnapshot.forEach((doc: any) => {
                for (const [key, value] of Object.entries(doc.data().StiriListContent)) 
                    getStiri.push(value)
                setSearchStire(getStiri[parseInt(id!)]);
                setLoading(false);
                setStiriLocalStorage(getStiri)
                })
            }
        }
        fetchData();
    }, [getStiriLocalStorage, id, setLoading, setStiriLocalStorage])

    if(loading)
        return <Loader />

    return(
        <>
            <HelmetProvider>
                <div>
                    <Helmet>
                        <title>Știre - Tradițional TV</title>
                        <meta name="description" content="Știre - Tradițional TV" />
                    </Helmet>
                </div>
            </HelmetProvider>
            <Title text={searchStire?.title} />
            <div className="title-image-container">
                <img src={searchStire.imageSource} alt={searchStire.title} />
            </div>
            <div className="stire-content">
                {htmlToReactParser.parse(searchStire.content)}
            </div>
            {searchStire.author && <p className="author">Articol realizat de {searchStire.author}</p>}
        </>
    );
}

export default Stire;