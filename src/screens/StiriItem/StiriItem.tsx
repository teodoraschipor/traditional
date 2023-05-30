import React, { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import "./StiriItem.scss";
import { useParams } from "react-router-dom";
import { StiriItems } from "../../mockups";
import { IStire } from "../../TypesInterfaces";
const HtmlToReactParser = require('html-to-react').Parser;

const StiriItem = () => {
    
    const { id } = useParams();
    const [stire, setStire] = useState<IStire>({id: 0, title: "", image: "", author: "", content: ""});
    const htmlToReactParser = new HtmlToReactParser();

    useEffect(() => {
        const searchStire = StiriItems.find(element => element.id === parseInt(id!));
        if(searchStire) {
            setStire(searchStire); 
        }
        
    }, [id])

    useEffect(() => {
        console.log(stire)
    } , [stire])

    return(
        /*(stire.id === 0) ? 
        <Navigate to={getRoutePath(TraditionalTvRoutesNames.ACASA)} />
        :*/
        <>

            <Title text={stire?.title} />
            <div className="stire-content">
                {htmlToReactParser.parse(stire.content)}
            </div>
            <p className="author">Articol realizat de {stire.author}</p>
        </>
    );
}

export default StiriItem;