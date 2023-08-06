import "./Menu.scss";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import { IMenuItems } from "../../TypesInterfaces";
import { menuItems } from "../../mockups";

const Menu = () => {
    
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
 // const firebase = useContext(FirebaseContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  }, [])

  const renderLink = ({ name, path }: IMenuItems) => {
    const isActive = location.pathname === path;
    return(
        <Link to={path} key={path} className={"menu-list_item " + (isActive && "active")} onClick={() => setMenuOpen(false)}>{name}</Link>
    )
  }

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

export default Menu;