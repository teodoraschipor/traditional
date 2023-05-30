import "./MenuButton.scss";

const MenuButton = (menuOpen: any, setMenuOpen: Function) => {
    return(
        <div className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
        </div>
    )
}

export default MenuButton;