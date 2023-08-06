import { Helmet, HelmetProvider } from 'react-helmet-async';
import Title from "../../components/Title/Title";

const TermeniConditii = () => {
    return(
        <>
            <HelmetProvider>
                <div>
                    <Helmet>
                        <title>Termeni și condiții - Tradițional TV</title>
                        <meta name="description" content="Termeni și condiții - Tradițional TV" />
                    </Helmet>
                </div>
            </HelmetProvider>
            <Title text="Termeni și condiții" />
            
            <br />
            Website-ul <a href="http://traditionaltvhd.ro">www.traditionaltvhd.ro</a> este proprietatea
            SUCEAVA CULTURAL MEDIA SRL
            <br/>
            Continuarea navigării pe acest website înseamnă că sunteți de acord cu termenii și condițiile care ne guvernează activitatea online. În cazul în care nu sunteți de acord, vă rugam să părăsiți www.traditionaltvhd.ro
            <br/>
            1.	Drepturile vizitatorilor
            <br/>
            Orice persoană care accesează website-ul <a href="http://traditionaltvhd.ro">www.traditionaltvhd.ro</a> are dreptul de a distribui continutul sub forma de link, dreptul de a comenta sau a-si expresia parerea despre un subiect dezbatut, respectand un limbaj adecvat.
            Vizitatorul are dreptul de confidentialitate și dreptul de a ruga proprietarul sa stearga toate informatiile legate de vizitator. Mai multe detalii in politica de confidentialitate.
            <br/>
            2.	 Obligațiile vizitatorului.
            <br/>
            Este interzisa preluarea continutului text / foto fara acordul proprietarului.
            Sunt interzise total comentariile care aduc prejudiciu sau jignesc.
            Sunt interzise atacurile de orice fel sau incercarile de a accesa ilegal baza de date / continutul site-ului.
    
        </>
    )
}

export default TermeniConditii;