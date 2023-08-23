import "./Contact.scss"
import Title from "../../components/Title/Title";
// import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useContext, useEffect } from "react";
import { LoadingContext } from "../../App";

const Contact = () => {
    const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "replace with service id",
    //     "replace with template id",
    //     form.current,
    //     "replace with user id"
    //   )
    //   .then(
    //     (result: any) => {
    //       console.log(result.text);
    //       console.log("message sent");
    //     },
    //     (error: any) => {
    //       console.log(error.text);
    //     }
    //   );
  };
  const { loading, setLoading } = useContext(LoadingContext)

  useEffect(() => {
      setLoading(false)
  }, [setLoading])

    return(
        <>
            <HelmetProvider>
              <div>
                <Helmet>
                    <title>Contact - Tradițional TV</title>
                    <meta name="description" content="Ne puteți contacta pe adresa de email traditionaltv@yahoo.ro" />
                </Helmet>
              </div>
            </HelmetProvider>
            <Title text="Contact" />
            <form className="contact-form" onSubmit={sendEmail}>
                <Link to={"mailto:traditionaltv@yahoo.ro"}>traditionaltv@yahoo.ro</Link>
                <Link to={"tel:+40330883395"}>0330 883 395</Link> 
                <br/>
                <label>Formularul va fi disponibil în cel mai scurt timp posibil. Între timp ne puteți contacta prin opțiunile afișate mai sus.</label>
                <br/>
                <label htmlFor="nume" id="first">Nume:</label>
                <input type="text" id="nume" name="nume"/>
                <label htmlFor="telefon">Telefon:</label>
                <input type="text" id="telefon" name="telefon"/>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email"/>
                <label htmlFor="mesaj">Cu ce va putem ajuta?</label>
                <textarea id="mesaj" name="mesaj" rows={5} />
                <input type="submit" value="Trimite" disabled/>
            </form>
        </>    
    )
}

export default Contact;