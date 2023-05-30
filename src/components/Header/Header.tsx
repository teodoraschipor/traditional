import "./Header.scss"
import Menu from '../Menu/Menu';
import RedBar from "../RedBar/RedBar";
import LogoBar from "../LogoBar/LogoBar";

const Header = () => {

  return (
    <header>
      <RedBar />
      <LogoBar />
      <Menu />
    </header>
  );
};

export default Header;