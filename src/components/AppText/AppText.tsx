import "./AppText.scss"
import { IAppText } from "../../TypesInterfaces";

const AppText = (props: IAppText) => {
    return(
        <p className={props.className}>{props.text}</p>
    )
}

export default AppText;