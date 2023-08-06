import "./Stiri.scss"
import Title from "../../components/Title/Title";
import { useLocation } from "react-router-dom";
import { getRoutePath } from "../../routes/routes-utils";
import { TraditionalTvRoutesNames } from "../../routes/routes-names";
import Gallery from "../../components/Gallery/Gallery";
import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../../App";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import Loader from "../../components/Loader/Loader";
import useLocalStorage from "../../hooks/useLocalStorage";

const Stiri = () => {

    const defaultValue : any = [];
    const location = useLocation();
    const { loading, setLoading } = useContext(LoadingContext)
    const [stiri, setStiri] = useState<any[]>([]);
    const [stiriLocalStorage, setStiriLocalStorage]= useLocalStorage('StiriList', defaultValue);
    const getStiriLocalStorage: any = localStorage.getItem("StiriList");

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            if(getStiriLocalStorage)
            {
                setStiri(getStiriLocalStorage!)
                setLoading(false)
            } else {
                const getStiri : any[] = [];
                const querySnapshot = await getDocs(collection(db, "StiriList"));
                querySnapshot.forEach((doc: any) => {
                for (const [key, value] of Object.entries(doc.data().StiriList)) 
                    getStiri.push(value)
                setStiri(getStiri);
                setLoading(false);
                setStiriLocalStorage(getStiri)
                })
            }
        }
        fetchData();
      }, [])

    if(loading)
        return <Loader />

    return(
        <>
            {location.pathname === getRoutePath(TraditionalTvRoutesNames.STIRI) && <Title text="Știri" />}
            <Gallery items={stiri} />
            {console.log(stiri)}
        </>
    )
}

export default Stiri;