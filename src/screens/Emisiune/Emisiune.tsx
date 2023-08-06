import React, { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import "./Stire.scss";
import { useParams } from "react-router-dom";
import { EmisiuniItems } from "../../mockups";
import { IStire } from "../../TypesInterfaces";
const HtmlToReactParser = require('html-to-react').Parser;

const Emisiune = () => {
    
    const { id } = useParams();
    const [emisiune, setEmisiune] = useState<IStire>({id: 0, title: "", image: "", author: "", content: ""});
    const htmlToReactParser = new HtmlToReactParser();

    useEffect(() => {
        const searchStire = EmisiuniItems.find(element => element.id === parseInt(id!));
        if(searchStire) {
            setEmisiune(searchStire); 
        }
        
    }, [id])

    return(
        <>

            <Title text={emisiune?.title} />
            <div className="emisiune-content">
                {htmlToReactParser.parse(emisiune.content)}
            </div>
            <p className="author">Articol realizat de {emisiune.author}</p>
        </>
    );
}

export default Emisiune;