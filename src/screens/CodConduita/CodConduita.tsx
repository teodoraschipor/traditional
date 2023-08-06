import { Helmet, HelmetProvider } from "react-helmet-async";
import Title from "../../components/Title/Title";

const CodConduita = () => {
    return(
        <>
            <HelmetProvider>
                <div>
                    <Helmet>
                        <title>Cod de conduită - Tradițional TV</title>
                        <meta name="description" content="TRADIŢIONAL TV este un post de televiziune de muzică şi divertisment folcloric cu o viziune de prospeţime şi tinereţe menită să ţină toate generaţiile de telespectatori cât mai aproape de spaţiul tradiţional românesc." />
                    </Helmet>
                </div>
            </HelmetProvider>
            <Title text="Cod de conduită" />
            <br/>
        TRADIŢIONAL TV este un post de televiziune de muzică şi divertisment folcloric cu o viziune de prospeţime şi tinereţe menită să ţină toate generaţiile de telespectatori cât mai aproape de spaţiul tradiţional românesc. 
        <br/><br/>
        Scopul şi interesul postului TRADIŢIONAL TV este de a furniza conţinut de calitate telespectatorilor care au rămas fideli în timp muzicii şi valorilor tradiţionale, dar şi de a atrage şi fideliza tinerii oferindu-le ultimele nouatăţi musicale şi emisiuni interactive, divertisment, reportaje cu invitaţi artişti şi personalităţi ale culturii româneşti.
        <br/><br/>
        Angajaţii postului TRADIŢIONAL TV respectă interesul public, interesele legitime şi drepturile cetăţenilor  şi nu afectează demnitatea şi imaginea publică a acestora.
        <br/><br/>
        Angajaţii postului TRADIŢIONAL TV trebuie să adopte un comportament bazat pe respect, imparţialitate, onestitate şi nediscriminare faţă de ceilalţi angajaţi, colaboratori, invitaţi, parteneri ai firmei.
        <br/><br/>
        Ne conformăm cu legea în vigoare şi precizăm că protejăm datele personale şi drepturile de confidenţialitate ale tuturor persoanelor care interacţionează cu postul de televiziune TRADIŢIONAL TV.
        <br/><br/>
        TRADIŢIONAL TV nu promovează violenţa, indiferent de forma acesteia.
        </>
    )
}

export default CodConduita;