import React, { useContext, useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import "./Stire.scss";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { LoadingContext } from "../../App";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const HtmlToReactParser = require('html-to-react').Parser;

const Stire = () => {
    
    const { title } = useParams();
    const { loading, setLoading } = useContext(LoadingContext)
    const htmlToReactParser = new HtmlToReactParser();
    const [searchStire, setSearchStire] = useState<any>({});

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            const collectionRef = db.collection("StiriList1");
            const documentRef = collectionRef.doc(title?.replace("%20", " "));
            documentRef.get().then((doc) => {
                if(doc.exists) {
                    const options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric'
                    };
                    const date = doc.data()!.date.toDate().toLocaleString('ro-RO', options);
                    const imageSource = doc.data()!.imageSource;
                    const author = doc.data()!.author;
                    const title = doc.data()!.title;
                    const content = doc.data()!.content;
                    setSearchStire({ date: date, title: title, author: author, imageSource: imageSource, content: content })
                    setLoading(false);
                } else {
                    return(<>A aparut o eroare!</>)
                }
            })
        }
        fetchData();
    }, []);

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
            
            <p className="date">— {searchStire.date} —</p>
            <div className="stire-content">
                {htmlToReactParser.parse(searchStire.content)}
            </div>
            {searchStire.author && <p className="author">Articol realizat de {searchStire.author}</p>}
        </>
    );
}

export default Stire;