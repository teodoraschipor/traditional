import "./Contact.scss"
import Title from "../../components/Title/Title";

const Contact = () => {
    return(
        <>
            <Title text="Contact" />
            <form className="contact-form">
                <label htmlFor="nume">Nume:</label>
                <input type="text" id="nume" name="nume"/>
                <label htmlFor="telefon">Telefon:</label>
                <input type="text" id="telefon" name="telefon"/>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email"/>
                <label htmlFor="mesaj">Cu ce va putem ajuta?</label>
                <textarea id="mesaj" name="mesaj" rows={5} />
                <input type="submit" value="Trimite" />
            </form>
        </>    
    )
}

export default Contact;