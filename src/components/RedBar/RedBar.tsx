import "./RedBar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons"

const RedBar = () => {
    return(
    <div className="redbar">
        <FontAwesomeIcon icon={faFacebookF} onClick={() => window.open('https://www.facebook.com/TraditionalTV/')}/>
        <FontAwesomeIcon icon={faInstagram} onClick={() => window.open('https://www.instagram.com/traditional.tv/')} />
        <FontAwesomeIcon icon={faTiktok} onClick={() => window.open('https://www.tiktok.com/@traditionaltvromania?_t=8caC0iopKqg&_r=1')} />
        <FontAwesomeIcon icon={faYoutube} onClick={() => window.open('https://www.youtube.com/@TraditionalTV')} />
    </div>
    )
}

export default RedBar;