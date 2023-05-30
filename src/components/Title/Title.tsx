import "./Title.scss"

interface ITitle {
    text: string
}
const Title = (props: ITitle) => {
    return(
        <div className="title-container">
            <p className="title">{props.text}</p>
        </div>
    )
}

export default Title;