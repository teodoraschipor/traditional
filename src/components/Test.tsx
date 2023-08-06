import "./Menu.scss";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import { IMenuItems } from "../TypesInterfaces";
import { FirebaseContext } from "../context/FirebaseContext";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore"
import Loader from "./Loader/Loader";

const TestMenu = () => {
    
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
 // const firebase = useContext(FirebaseContext);
  const [loading, setLoading] = useState(true);
  const [menuItems, setMenuItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async() => {
        const getMenuItems : any[] = [];
        const querySnapshot = await getDocs(collection(db, "MenuItems"));
        querySnapshot.forEach((doc: any) => {
        // // doc.data() is never undefined for query doc snapshots
        // console.log(typeof(doc.data()));
        for (const [key, value] of Object.entries(doc.data())) {
            getMenuItems.push(value)
        }
        getMenuItems.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        })
        setMenuItems(getMenuItems);
        setLoading(false);
        });
        // const subscriber = db.collection("MenuItems").onSnapshot((querySnapshot) => {
        //     querySnapshot.forEach((doc) => getMenuItems.push({...doc.data}))
    }
    fetchData();
  }, [])

  const renderLink = ({ name, path }: IMenuItems) => {
    const isActive = location.pathname === path;
    return(
        <Link to={path} key={path} className={"menu-list_item " + (isActive && "active")} onClick={() => setMenuOpen(false)}>{name}</Link>
    )
  }
  
    if(loading)
        return <Loader />

    return(
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
            <div className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                <span className="top"></span>
                <span className="middle"></span>
                <span className="bottom"></span>
            </div>
            <nav className="menu-list">
                {menuItems.flatMap((item) => renderLink(item))}
            </nav>
        </div>
    );
}

export default TestMenu;