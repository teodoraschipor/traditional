import { Helmet, HelmetProvider } from 'react-helmet-async';
import Title from "../../components/Title/Title";
import { LoadingContext } from '../../App';
import { useContext, useEffect } from 'react';

const Informatii = () => {
    
    const { loading, setLoading } = useContext(LoadingContext)

    useEffect(() => {
        setLoading(false)
    }, [setLoading])
    return(
        <>
            <HelmetProvider>
                <div>
                    <Helmet>
                        <title>Informații - Tradițional TV</title>
                        <meta name="description" content="Informații - Tradițional TV" />
                    </Helmet>
                </div>
            </HelmetProvider>
            <Title text="Informații de interes public" />
            <br />
            Postul de televiziune TRADIȚIONAL TV este deținut de către societatea comercială  SUCEAVA CULTURAL MEDIA S.R.L. 
            <br/><br/>
            S.C. SUCEAVA CULTURAL MEDIA S.R.L are sediul în Strada Traian Vuia nr. 15, localitatea Suceava, judeţul Suceava, cod 720021, înregistrată la Oficiul Registrului Comerţului de pe lângă Tribunalul Suceava sub numărul J33/703/2015, CUI 34855852.
            <br/><br/>
            Structura acționariatului:
            <ul>
                <li>Radu-Constantin Schipor - 90%</li>
                <li>Ioana-Teodora Schipor – 10%</li>
            </ul>
            <br/>
            Director producție: Marcel Piticari
            <br/>
            Director tehnic: Bogdan Aniței
            <br/>
            Coordonatele furnizorului de servicii mass-media:
            <br/>
            - e-mail: 
            <a href = "mailto: traditionaltv@yahoo.ro">traditionaltv@yahoo.ro</a>
            <br/>
            - website: 
            <br/>
            <a href="https://traditionaltv.net/">www.traditionaltv.net</a>   
            <br/>   
            <a href="http://traditionaltvhd.ro" >www.traditionaltvhd.ro </a>
            <br/><br/>
            Organismul de reglementare: Consiliul Național al Audiovizualului –CNA
            <br/>
            - adresa : Bd. Libertății nr 14, sector 5, cod 050706, București , România
            <br/>
            - telefon : <a href="tel:021-3055350">021-3055350</a>
            <br/>
            - fax : <a href="tel:021-3055354">021-3055354/56</a>
            <br/>
            - e-mail: <a href = "mailto: cna@cna.ro">cna@cna.ro</a>
            <br/>
            - adresa web: <a href="https://www.cna.ro">https://www.cna.ro</a>
        </>
    )
}

export default Informatii;