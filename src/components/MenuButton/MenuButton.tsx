import "./MenuButton.scss";

const MenuButton = (menuOpen: any, setMenuOpen: Function) => {
    return(
        <div className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="top"></div>
            <div className="middle"></div>
            <div className="bottom"></div>
        </div>
    )
}

export default MenuButton;