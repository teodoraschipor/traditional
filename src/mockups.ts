import { ICarouselItem, IEmisiune, IFooterItem, IGalleryItem, IMenuItems } from "./TypesInterfaces";
import { TraditionalTvRoutesNames } from "./routes/routes-names";
import { getRoutePath } from "./routes/routes-utils";

export const menuItems: IMenuItems[] = [
    {
        name: "Acasă",
        path: getRoutePath(TraditionalTvRoutesNames.ACASA),
    },
    {
        name: "Știri",
        path: getRoutePath(TraditionalTvRoutesNames.STIRI),
    },
    {
        name: "Emisiuni",
        path: getRoutePath(TraditionalTvRoutesNames.EMISIUNI),
    },
    {
        name: "Tradiționali de seamă",
        path: getRoutePath(TraditionalTvRoutesNames.TRADITIONALIDESEAMA),
    },
    {
        name: "Program",
        path: getRoutePath(TraditionalTvRoutesNames.PROGRAM),
    },
    {
        name: "Contact",
        path: getRoutePath(TraditionalTvRoutesNames.CONTACT),
    },
    {
        name: "Live",
        path: getRoutePath(TraditionalTvRoutesNames.LIVE),
    },
];

export const footerSections: IFooterItem[] = [
    {
        title: "Fii tradițional",
        section: [
            {
                name: "Echipa",
                type: "url",
                path: "/echipa",
            },
            {
                name: "Despre comunitate",
                type: "url",
                path: "/despre-comunitate",
            }
        ]
    },
    {
        title: "Ne găsiți la:",
        section: [
            {
                name: "0330 883 395",
                type: "phone",
                path: "tel:+40330883395",
            },
            {
                name: "traditionaltv@yahoo.ro",
                type: "email",
                path: "mailto: traditionaltv@yahoo.ro",
            },
            {
                name: "contact@traditionaltv.net",
                type: "email",
                path: "mailto: contact@traditionaltv.net",
            },
            {
                name: "publicitate@traditionaltv.net",
                type: "email",
                path: "mailto: publicitate@traditionaltv.net",
            }
        ]
    },
    {
        title: "Legale",
        section: [
            {
                name: "Confidențialitate & Cookies",
                type: "url",
                path: "/confidentialitate-si-cookies",
            },
            {
                name: "Termeni și condiții",
                type: "url",
                path: "/termeni-si-conditii",
            },
            {
                name: "Informații de interes public",
                type: "url",
                path: "/informatii-de-interes-public",
            },
            {
                name: "Cod de conduită",
                type: "url",
                path: "/cod-de-conduita",
            }
        ]
    }
];

export const StiriList : Array<IGalleryItem[]> = [
    [
        {
            id: 1,
            imageSource: "../../assets/paul-ananie.jpg",
            title: "Interviu de vacanță cu Paul Ananie"
        },
        {
            id: 2,
            imageSource: "../../assets/Teodora.jpeg",
            title: "Teodora e cea mai smechera de pe planeta Pamant"
        },
        {
            id: 3,
            imageSource: "../../assets/Teodora.jpeg",
            title: "Teodora e cea mai smechera de pe planeta Pamant"
        },
        {
            id: 4,
            imageSource: "../../assets/Teodora.jpeg",
            title: "Teodora e cea mai smechera de pe planeta Pamant"
        },
    ],
    [
        {
            id: 5,
            imageSource: "../../assets/Teodora.jpeg",
            title: "Imagine de artist – IZABELA TOMIȚA"
        },
        {
            id: 6,
            imageSource: "../../assets/Teodora.jpeg",
            title: "Interviu de vacanță cu Alexandru Brădățan"
        },
        {
            id: 7,
            imageSource: "../../assets/Teodora.jpeg",
            title: "Teodora e cea mai smechera de pe planeta Pamant"
        },
        {
            id: 8,
            imageSource: "../../assets/Teodora.jpeg",
            title: "Teodora e cea mai smechera de pe planeta Pamant"
        },
    ],
    [
        {
            id: 9,
            imageSource: "../../assets/Teodora.jpeg",
            title: "Teodora e cea mai smechera de pe planeta Pamant"
        },
        {
            id: 10,
            imageSource: "../../assets/Teodora.jpeg",
            title: "Teodora e cea mai smechera de pe planeta Pamant"
        },
        {
            id: 11,
            imageSource: "../../assets/Teodora.jpeg",
            title: "Teodora e cea mai smechera de pe planeta Pamant"
        },
        {
            id: 12,
            imageSource: "../../assets/Teodora.jpeg",
            title: "Teodora e cea mai smechera de pe planeta Pamant"
        },
    ],
];

export const EmisiuniList : ICarouselItem[] = [
    {
        id: 1,
        imageSource: "../../assets/paul-ananie.jpg",
        title: "Dedicatii muzicale"
    },
    {
        id: 2,
        imageSource: "../../assets/Teodora.jpeg",
        title: "Drag de viata cu doinasii"
    },
    {
        id: 3,
        imageSource: "../../assets/Teodora.jpeg",
        title: "Portret muzical"
    },
    {
        id: 4,
        imageSource: "../../assets/Teodora.jpeg",
        title: "Teodora e cea mai smechera de pe planeta Pamant"
    },
]

export const EmisiuniItems: IEmisiune[] = [
    {
        id: 1,
        title: "Interviu de vacanță cu Paul Ananie",
        image: "../../assets/paul-ananie.jpg",
        author: "Adelina Fulga",
        content: '<div><p className="subtitle">Autoportret</p> <br/> <p>Natural. Și oleacă amuzant, cred. Sper. 😅</p><br/><p className="subtitle">Cireașa de pe tort</p><br/><p>Pfuu… depinde cum ne raportăm. Am avut câteva “cireșe” până acum, dar în diferite domenii. Unul dintre cele mai importante momente, spiritual vorbind, a fost atunci când l-am primit pe Papa cu pâine și sare iar Sanctitatea Sa mi-a strâns mâna și mi-a oferit un rozariu. 🙂</p><br/><p className="subtitle">Pastila de râs</p><br/><p>Sunt multe… De la microfoane-n dinți la împiedicat în culise chiar înainte de a intra pe scenă 🤣.</p><br/><p className="subtitle">Personajul-cheie</p><br/><p>Alexandru Pugna. Multe îi datorez acestui om extraordinar. M-a luat sub aripa sa și m-a crescut enorm, profesional vorbind.</p><br/><p className="subtitle">Călcâiul lui Ahile</p><br/><p>Eu. Eu sunt principala mea barieră, mintea mea este cea care îmi pune piedici câteodată. Dar tot ea mă ridică și mergem mai departe!</p></div><div><p>Paul Ananie, mereu în rimă perfectă cu veselie este originar din Vadu Izei dar, până să ajungem în Maramureș, îl găsim în spațiul virtual, în mijlocul comunității sale numeroase de urmăritori, cântând mai tot timpul-live, impecabil și cu dulceață.</p><br/><p>Dincolo de mediul online, unde deja s-a instalat ca un curent artistic cu răsunet ‘𝘎Ă𝘛𝘌𝘑‘, Paul Ananie animă petrecerile cu lume multă, realizează emisiuni Tv și își dedică timpul rămas tot muzicii, reinventând-o mereu în cele mai năstrușnice versiuni. Videoclipul melodiei sale “Inimă, vreu să grăim” deschide o nouă perspectivă în industria videografică, fiind primul clip realizat în maniera unor desene animate din folclor, al unui artist popular din România. Și calitatea de lider de opinie a solistului maramureșean nu se rezumă aici, acesta fiind “fredonat”, “citat” și “integrat” în multe dintre activitățile celor care îi cunosc repertoriul și personalitatea.</p><br/><p>Și, ca să închei simetric acest scurt fragment de descriere, Ananie este mereu în rimă perfectă și cu prietenie, în virtutea căreia colaborările online se întâmplă.</p></div>'
       },
    /*
      content: '<><div><AppText text="Autoportret" /> <br/> <AppText text="Natural. Și oleacă amuzant, cred. Sper. 😅" /><br/><AppText text="Cireașa de pe tort" /><br/><AppText text="Pfuu… depinde cum ne raportăm. Am avut câteva “cireșe” până acum, dar în diferite domenii. Unul dintre cele mai importante momente, spiritual vorbind, a fost atunci când l-am primit pe Papa cu pâine și sare iar Sanctitatea Sa mi-a strâns mâna și mi-a oferit un rozariu. 🙂" /><br/><AppText text="Pastila de râs" /><br/><AppText text="Sunt multe… De la microfoane-n dinți la împiedicat în culise chiar înainte de a intra pe scenă 🤣." /><br/><AppText text="Personajul-cheie" /><br/><AppText text="Alexandru Pugna. Multe îi datorez acestui om extraordinar. M-a luat sub aripa sa și m-a crescut enorm, profesional vorbind." /><br/><AppText text="Călcâiul lui Ahile" /><br/><AppText text="Eu. Eu sunt principala mea barieră, mintea mea este cea care îmi pune piedici câteodată. Dar tot ea mă ridică și mergem mai departe!" /></div><div><AppText text="Paul Ananie, mereu în rimă perfectă cu veselie este originar din Vadu Izei dar, până să ajungem în Maramureș, îl găsim în spațiul virtual, în mijlocul comunității sale numeroase de urmăritori, cântând mai tot timpul-live, impecabil și cu dulceață." /><br/><AppText text="Dincolo de mediul online, unde deja s-a instalat ca un curent artistic cu răsunet ‘𝘎Ă𝘛𝘌𝘑‘, Paul Ananie animă petrecerile cu lume multă, realizează emisiuni Tv și își dedică timpul rămas tot muzicii, reinventând-o mereu în cele mai năstrușnice versiuni. Videoclipul melodiei sale “Inimă, vreu să grăim” deschide o nouă perspectivă în industria videografică, fiind primul clip realizat în maniera unor desene animate din folclor, al unui artist popular din România. Și calitatea de lider de opinie a solistului maramureșean nu se rezumă aici, acesta fiind “fredonat”, “citat” și “integrat” în multe dintre activitățile celor care îi cunosc repertoriul și personalitatea." /><br/><AppText text="Și, ca să închei simetric acest scurt fragment de descriere, Ananie este mereu în rimă perfectă și cu prietenie, în virtutea căreia colaborările online se întâmplă." /></div></>'
    */

      /*
              content: '<div><p>Autoportret</p> <br/> <p>Natural. Și oleacă amuzant, cred. Sper. 😅</p><br/><p>Cireașa de pe tort</p><br/><p>Pfuu… depinde cum ne raportăm. Am avut câteva “cireșe” până acum, dar în diferite domenii. Unul dintre cele mai importante momente, spiritual vorbind, a fost atunci când l-am primit pe Papa cu pâine și sare iar Sanctitatea Sa mi-a strâns mâna și mi-a oferit un rozariu. 🙂</p><br/><p>Pastila de râs</p><br/><p>Sunt multe… De la microfoane-n dinți la împiedicat în culise chiar înainte de a intra pe scenă 🤣.</p><br/><p>Personajul-cheie</p><br/><p>Alexandru Pugna. Multe îi datorez acestui om extraordinar. M-a luat sub aripa sa și m-a crescut enorm, profesional vorbind.</p><br/><p>Călcâiul lui Ahile</p><br/><p>Eu. Eu sunt principala mea barieră, mintea mea este cea care îmi pune piedici câteodată. Dar tot ea mă ridică și mergem mai departe!</p></div><div><p>Paul Ananie, mereu în rimă perfectă cu veselie este originar din Vadu Izei dar, până să ajungem în Maramureș, îl găsim în spațiul virtual, în mijlocul comunității sale numeroase de urmăritori, cântând mai tot timpul-live, impecabil și cu dulceață.</p><br/><p>Dincolo de mediul online, unde deja s-a instalat ca un curent artistic cu răsunet ‘𝘎Ă𝘛𝘌𝘑‘, Paul Ananie animă petrecerile cu lume multă, realizează emisiuni Tv și își dedică timpul rămas tot muzicii, reinventând-o mereu în cele mai năstrușnice versiuni. Videoclipul melodiei sale “Inimă, vreu să grăim” deschide o nouă perspectivă în industria videografică, fiind primul clip realizat în maniera unor desene animate din folclor, al unui artist popular din România. Și calitatea de lider de opinie a solistului maramureșean nu se rezumă aici, acesta fiind “fredonat”, “citat” și “integrat” în multe dintre activitățile celor care îi cunosc repertoriul și personalitatea.</p><br/><p>Și, ca să închei simetric acest scurt fragment de descriere, Ananie este mereu în rimă perfectă și cu prietenie, în virtutea căreia colaborările online se întâmplă.</p></div>'
       */
    {
        id: 2,
        title: "Interviu de vacanță cu Paul Ananie",
        image: "",
        author: "Adelina Fulga",
        content: '<div><p className="subtitle">Autoportret</p> <br/> <p>Natural. Și oleacă amuzant, cred. Sper. 😅</p><br/><p className="subtitle">Cireașa de pe tort</p><br/><p>Pfuu… depinde cum ne raportăm. Am avut câteva “cireșe” până acum, dar în diferite domenii. Unul dintre cele mai importante momente, spiritual vorbind, a fost atunci când l-am primit pe Papa cu pâine și sare iar Sanctitatea Sa mi-a strâns mâna și mi-a oferit un rozariu. 🙂</p><br/><p className="subtitle">Pastila de râs</p><br/><p>Sunt multe… De la microfoane-n dinți la împiedicat în culise chiar înainte de a intra pe scenă 🤣.</p><br/><p className="subtitle">Personajul-cheie</p><br/><p>Alexandru Pugna. Multe îi datorez acestui om extraordinar. M-a luat sub aripa sa și m-a crescut enorm, profesional vorbind.</p><br/><p className="subtitle">Călcâiul lui Ahile</p><br/><p>Eu. Eu sunt principala mea barieră, mintea mea este cea care îmi pune piedici câteodată. Dar tot ea mă ridică și mergem mai departe!</p></div><div><p>Paul Ananie, mereu în rimă perfectă cu veselie este originar din Vadu Izei dar, până să ajungem în Maramureș, îl găsim în spațiul virtual, în mijlocul comunității sale numeroase de urmăritori, cântând mai tot timpul-live, impecabil și cu dulceață.</p><br/><p>Dincolo de mediul online, unde deja s-a instalat ca un curent artistic cu răsunet ‘𝘎Ă𝘛𝘌𝘑‘, Paul Ananie animă petrecerile cu lume multă, realizează emisiuni Tv și își dedică timpul rămas tot muzicii, reinventând-o mereu în cele mai năstrușnice versiuni. Videoclipul melodiei sale “Inimă, vreu să grăim” deschide o nouă perspectivă în industria videografică, fiind primul clip realizat în maniera unor desene animate din folclor, al unui artist popular din România. Și calitatea de lider de opinie a solistului maramureșean nu se rezumă aici, acesta fiind “fredonat”, “citat” și “integrat” în multe dintre activitățile celor care îi cunosc repertoriul și personalitatea.</p><br/><p>Și, ca să închei simetric acest scurt fragment de descriere, Ananie este mereu în rimă perfectă și cu prietenie, în virtutea căreia colaborările online se întâmplă.</p></div>'
    },
    {
        id: 3,
        title: "Interviu de vacanță cu Paul Ananie",
        image: "",
        author: "Adelina Fulga",
        content: '<div><p className="subtitle">Autoportret</p> <br/> <p>Natural. Și oleacă amuzant, cred. Sper. 😅</p><br/><p className="subtitle">Cireașa de pe tort</p><br/><p>Pfuu… depinde cum ne raportăm. Am avut câteva “cireșe” până acum, dar în diferite domenii. Unul dintre cele mai importante momente, spiritual vorbind, a fost atunci când l-am primit pe Papa cu pâine și sare iar Sanctitatea Sa mi-a strâns mâna și mi-a oferit un rozariu. 🙂</p><br/><p className="subtitle">Pastila de râs</p><br/><p>Sunt multe… De la microfoane-n dinți la împiedicat în culise chiar înainte de a intra pe scenă 🤣.</p><br/><p className="subtitle">Personajul-cheie</p><br/><p>Alexandru Pugna. Multe îi datorez acestui om extraordinar. M-a luat sub aripa sa și m-a crescut enorm, profesional vorbind.</p><br/><p className="subtitle">Călcâiul lui Ahile</p><br/><p>Eu. Eu sunt principala mea barieră, mintea mea este cea care îmi pune piedici câteodată. Dar tot ea mă ridică și mergem mai departe!</p></div><div><p>Paul Ananie, mereu în rimă perfectă cu veselie este originar din Vadu Izei dar, până să ajungem în Maramureș, îl găsim în spațiul virtual, în mijlocul comunității sale numeroase de urmăritori, cântând mai tot timpul-live, impecabil și cu dulceață.</p><br/><p>Dincolo de mediul online, unde deja s-a instalat ca un curent artistic cu răsunet ‘𝘎Ă𝘛𝘌𝘑‘, Paul Ananie animă petrecerile cu lume multă, realizează emisiuni Tv și își dedică timpul rămas tot muzicii, reinventând-o mereu în cele mai năstrușnice versiuni. Videoclipul melodiei sale “Inimă, vreu să grăim” deschide o nouă perspectivă în industria videografică, fiind primul clip realizat în maniera unor desene animate din folclor, al unui artist popular din România. Și calitatea de lider de opinie a solistului maramureșean nu se rezumă aici, acesta fiind “fredonat”, “citat” și “integrat” în multe dintre activitățile celor care îi cunosc repertoriul și personalitatea.</p><br/><p>Și, ca să închei simetric acest scurt fragment de descriere, Ananie este mereu în rimă perfectă și cu prietenie, în virtutea căreia colaborările online se întâmplă.</p></div>'
    },
    {
        id: 4,
        title: "Interviu de vacanță cu Paul Ananie",
        image: "",
        author: "Adelina Fulga",
        content: '<div><p className="subtitle">Autoportret</p> <br/> <p>Natural. Și oleacă amuzant, cred. Sper. 😅</p><br/><p className="subtitle">Cireașa de pe tort</p><br/><p>Pfuu… depinde cum ne raportăm. Am avut câteva “cireșe” până acum, dar în diferite domenii. Unul dintre cele mai importante momente, spiritual vorbind, a fost atunci când l-am primit pe Papa cu pâine și sare iar Sanctitatea Sa mi-a strâns mâna și mi-a oferit un rozariu. 🙂</p><br/><p className="subtitle">Pastila de râs</p><br/><p>Sunt multe… De la microfoane-n dinți la împiedicat în culise chiar înainte de a intra pe scenă 🤣.</p><br/><p className="subtitle">Personajul-cheie</p><br/><p>Alexandru Pugna. Multe îi datorez acestui om extraordinar. M-a luat sub aripa sa și m-a crescut enorm, profesional vorbind.</p><br/><p className="subtitle">Călcâiul lui Ahile</p><br/><p>Eu. Eu sunt principala mea barieră, mintea mea este cea care îmi pune piedici câteodată. Dar tot ea mă ridică și mergem mai departe!</p></div><div><p>Paul Ananie, mereu în rimă perfectă cu veselie este originar din Vadu Izei dar, până să ajungem în Maramureș, îl găsim în spațiul virtual, în mijlocul comunității sale numeroase de urmăritori, cântând mai tot timpul-live, impecabil și cu dulceață.</p><br/><p>Dincolo de mediul online, unde deja s-a instalat ca un curent artistic cu răsunet ‘𝘎Ă𝘛𝘌𝘑‘, Paul Ananie animă petrecerile cu lume multă, realizează emisiuni Tv și își dedică timpul rămas tot muzicii, reinventând-o mereu în cele mai năstrușnice versiuni. Videoclipul melodiei sale “Inimă, vreu să grăim” deschide o nouă perspectivă în industria videografică, fiind primul clip realizat în maniera unor desene animate din folclor, al unui artist popular din România. Și calitatea de lider de opinie a solistului maramureșean nu se rezumă aici, acesta fiind “fredonat”, “citat” și “integrat” în multe dintre activitățile celor care îi cunosc repertoriul și personalitatea.</p><br/><p>Și, ca să închei simetric acest scurt fragment de descriere, Ananie este mereu în rimă perfectă și cu prietenie, în virtutea căreia colaborările online se întâmplă.</p></div>'
    },
    {
        id: 5,
        title: "Imagine de artist – IZABELA TOMIȚA",
        image: "",
        author: "Adelina Fulga",
        content: '<div><p className="subtitle">Autoportret</p> <br/> <p>Natural. Și oleacă amuzant, cred. Sper. 😅</p><br/><p className="subtitle">Cireașa de pe tort</p><br/><p>Pfuu… depinde cum ne raportăm. Am avut câteva “cireșe” până acum, dar în diferite domenii. Unul dintre cele mai importante momente, spiritual vorbind, a fost atunci când l-am primit pe Papa cu pâine și sare iar Sanctitatea Sa mi-a strâns mâna și mi-a oferit un rozariu. 🙂</p><br/><p className="subtitle">Pastila de râs</p><br/><p>Sunt multe… De la microfoane-n dinți la împiedicat în culise chiar înainte de a intra pe scenă 🤣.</p><br/><p className="subtitle">Personajul-cheie</p><br/><p>Alexandru Pugna. Multe îi datorez acestui om extraordinar. M-a luat sub aripa sa și m-a crescut enorm, profesional vorbind.</p><br/><p className="subtitle">Călcâiul lui Ahile</p><br/><p>Eu. Eu sunt principala mea barieră, mintea mea este cea care îmi pune piedici câteodată. Dar tot ea mă ridică și mergem mai departe!</p></div><div><p>Paul Ananie, mereu în rimă perfectă cu veselie este originar din Vadu Izei dar, până să ajungem în Maramureș, îl găsim în spațiul virtual, în mijlocul comunității sale numeroase de urmăritori, cântând mai tot timpul-live, impecabil și cu dulceață.</p><br/><p>Dincolo de mediul online, unde deja s-a instalat ca un curent artistic cu răsunet ‘𝘎Ă𝘛𝘌𝘑‘, Paul Ananie animă petrecerile cu lume multă, realizează emisiuni Tv și își dedică timpul rămas tot muzicii, reinventând-o mereu în cele mai năstrușnice versiuni. Videoclipul melodiei sale “Inimă, vreu să grăim” deschide o nouă perspectivă în industria videografică, fiind primul clip realizat în maniera unor desene animate din folclor, al unui artist popular din România. Și calitatea de lider de opinie a solistului maramureșean nu se rezumă aici, acesta fiind “fredonat”, “citat” și “integrat” în multe dintre activitățile celor care îi cunosc repertoriul și personalitatea.</p><br/><p>Și, ca să închei simetric acest scurt fragment de descriere, Ananie este mereu în rimă perfectă și cu prietenie, în virtutea căreia colaborările online se întâmplă.</p></div>'
    },
    {
        id: 6,
        title: "Interviu de vacanță cu Alexandru Brădățan",
        image: "",
        author: "Adelina Fulga",
        content: '<div><p className="subtitle">Autoportret</p> <br/> <p>Natural. Și oleacă amuzant, cred. Sper. 😅</p><br/><p className="subtitle">Cireașa de pe tort</p><br/><p>Pfuu… depinde cum ne raportăm. Am avut câteva “cireșe” până acum, dar în diferite domenii. Unul dintre cele mai importante momente, spiritual vorbind, a fost atunci când l-am primit pe Papa cu pâine și sare iar Sanctitatea Sa mi-a strâns mâna și mi-a oferit un rozariu. 🙂</p><br/><p className="subtitle">Pastila de râs</p><br/><p>Sunt multe… De la microfoane-n dinți la împiedicat în culise chiar înainte de a intra pe scenă 🤣.</p><br/><p className="subtitle">Personajul-cheie</p><br/><p>Alexandru Pugna. Multe îi datorez acestui om extraordinar. M-a luat sub aripa sa și m-a crescut enorm, profesional vorbind.</p><br/><p className="subtitle">Călcâiul lui Ahile</p><br/><p>Eu. Eu sunt principala mea barieră, mintea mea este cea care îmi pune piedici câteodată. Dar tot ea mă ridică și mergem mai departe!</p></div><div><p>Paul Ananie, mereu în rimă perfectă cu veselie este originar din Vadu Izei dar, până să ajungem în Maramureș, îl găsim în spațiul virtual, în mijlocul comunității sale numeroase de urmăritori, cântând mai tot timpul-live, impecabil și cu dulceață.</p><br/><p>Dincolo de mediul online, unde deja s-a instalat ca un curent artistic cu răsunet ‘𝘎Ă𝘛𝘌𝘑‘, Paul Ananie animă petrecerile cu lume multă, realizează emisiuni Tv și își dedică timpul rămas tot muzicii, reinventând-o mereu în cele mai năstrușnice versiuni. Videoclipul melodiei sale “Inimă, vreu să grăim” deschide o nouă perspectivă în industria videografică, fiind primul clip realizat în maniera unor desene animate din folclor, al unui artist popular din România. Și calitatea de lider de opinie a solistului maramureșean nu se rezumă aici, acesta fiind “fredonat”, “citat” și “integrat” în multe dintre activitățile celor care îi cunosc repertoriul și personalitatea.</p><br/><p>Și, ca să închei simetric acest scurt fragment de descriere, Ananie este mereu în rimă perfectă și cu prietenie, în virtutea căreia colaborările online se întâmplă.</p></div>'
    },
    {
        id: 7,
        title: "Interviu de vacanță cu Paul Ananie",
        image: "",
        author: "Adelina Fulga",
        content: '<div><p className="subtitle">Autoportret</p> <br/> <p>Natural. Și oleacă amuzant, cred. Sper. 😅</p><br/><p className="subtitle">Cireașa de pe tort</p><br/><p>Pfuu… depinde cum ne raportăm. Am avut câteva “cireșe” până acum, dar în diferite domenii. Unul dintre cele mai importante momente, spiritual vorbind, a fost atunci când l-am primit pe Papa cu pâine și sare iar Sanctitatea Sa mi-a strâns mâna și mi-a oferit un rozariu. 🙂</p><br/><p className="subtitle">Pastila de râs</p><br/><p>Sunt multe… De la microfoane-n dinți la împiedicat în culise chiar înainte de a intra pe scenă 🤣.</p><br/><p className="subtitle">Personajul-cheie</p><br/><p>Alexandru Pugna. Multe îi datorez acestui om extraordinar. M-a luat sub aripa sa și m-a crescut enorm, profesional vorbind.</p><br/><p className="subtitle">Călcâiul lui Ahile</p><br/><p>Eu. Eu sunt principala mea barieră, mintea mea este cea care îmi pune piedici câteodată. Dar tot ea mă ridică și mergem mai departe!</p></div><div><p>Paul Ananie, mereu în rimă perfectă cu veselie este originar din Vadu Izei dar, până să ajungem în Maramureș, îl găsim în spațiul virtual, în mijlocul comunității sale numeroase de urmăritori, cântând mai tot timpul-live, impecabil și cu dulceață.</p><br/><p>Dincolo de mediul online, unde deja s-a instalat ca un curent artistic cu răsunet ‘𝘎Ă𝘛𝘌𝘑‘, Paul Ananie animă petrecerile cu lume multă, realizează emisiuni Tv și își dedică timpul rămas tot muzicii, reinventând-o mereu în cele mai năstrușnice versiuni. Videoclipul melodiei sale “Inimă, vreu să grăim” deschide o nouă perspectivă în industria videografică, fiind primul clip realizat în maniera unor desene animate din folclor, al unui artist popular din România. Și calitatea de lider de opinie a solistului maramureșean nu se rezumă aici, acesta fiind “fredonat”, “citat” și “integrat” în multe dintre activitățile celor care îi cunosc repertoriul și personalitatea.</p><br/><p>Și, ca să închei simetric acest scurt fragment de descriere, Ananie este mereu în rimă perfectă și cu prietenie, în virtutea căreia colaborările online se întâmplă.</p></div>'
    },
    {
        id: 8,
        title: "Interviu de vacanță cu Paul Ananie",
        image: "",
        author: "Adelina Fulga",
        content: '<div><p className="subtitle">Autoportret</p> <br/> <p>Natural. Și oleacă amuzant, cred. Sper. 😅</p><br/><p className="subtitle">Cireașa de pe tort</p><br/><p>Pfuu… depinde cum ne raportăm. Am avut câteva “cireșe” până acum, dar în diferite domenii. Unul dintre cele mai importante momente, spiritual vorbind, a fost atunci când l-am primit pe Papa cu pâine și sare iar Sanctitatea Sa mi-a strâns mâna și mi-a oferit un rozariu. 🙂</p><br/><p className="subtitle">Pastila de râs</p><br/><p>Sunt multe… De la microfoane-n dinți la împiedicat în culise chiar înainte de a intra pe scenă 🤣.</p><br/><p className="subtitle">Personajul-cheie</p><br/><p>Alexandru Pugna. Multe îi datorez acestui om extraordinar. M-a luat sub aripa sa și m-a crescut enorm, profesional vorbind.</p><br/><p className="subtitle">Călcâiul lui Ahile</p><br/><p>Eu. Eu sunt principala mea barieră, mintea mea este cea care îmi pune piedici câteodată. Dar tot ea mă ridică și mergem mai departe!</p></div><div><p>Paul Ananie, mereu în rimă perfectă cu veselie este originar din Vadu Izei dar, până să ajungem în Maramureș, îl găsim în spațiul virtual, în mijlocul comunității sale numeroase de urmăritori, cântând mai tot timpul-live, impecabil și cu dulceață.</p><br/><p>Dincolo de mediul online, unde deja s-a instalat ca un curent artistic cu răsunet ‘𝘎Ă𝘛𝘌𝘑‘, Paul Ananie animă petrecerile cu lume multă, realizează emisiuni Tv și își dedică timpul rămas tot muzicii, reinventând-o mereu în cele mai năstrușnice versiuni. Videoclipul melodiei sale “Inimă, vreu să grăim” deschide o nouă perspectivă în industria videografică, fiind primul clip realizat în maniera unor desene animate din folclor, al unui artist popular din România. Și calitatea de lider de opinie a solistului maramureșean nu se rezumă aici, acesta fiind “fredonat”, “citat” și “integrat” în multe dintre activitățile celor care îi cunosc repertoriul și personalitatea.</p><br/><p>Și, ca să închei simetric acest scurt fragment de descriere, Ananie este mereu în rimă perfectă și cu prietenie, în virtutea căreia colaborările online se întâmplă.</p></div>'
    },
    {
        id: 9,
        title: "Interviu de vacanță cu Paul Ananie",
        image: "",
        author: "Adelina Fulga",
        content: '<div><p className="subtitle">Autoportret</p> <br/> <p>Natural. Și oleacă amuzant, cred. Sper. 😅</p><br/><p className="subtitle">Cireașa de pe tort</p><br/><p>Pfuu… depinde cum ne raportăm. Am avut câteva “cireșe” până acum, dar în diferite domenii. Unul dintre cele mai importante momente, spiritual vorbind, a fost atunci când l-am primit pe Papa cu pâine și sare iar Sanctitatea Sa mi-a strâns mâna și mi-a oferit un rozariu. 🙂</p><br/><p className="subtitle">Pastila de râs</p><br/><p>Sunt multe… De la microfoane-n dinți la împiedicat în culise chiar înainte de a intra pe scenă 🤣.</p><br/><p className="subtitle">Personajul-cheie</p><br/><p>Alexandru Pugna. Multe îi datorez acestui om extraordinar. M-a luat sub aripa sa și m-a crescut enorm, profesional vorbind.</p><br/><p className="subtitle">Călcâiul lui Ahile</p><br/><p>Eu. Eu sunt principala mea barieră, mintea mea este cea care îmi pune piedici câteodată. Dar tot ea mă ridică și mergem mai departe!</p></div><div><p>Paul Ananie, mereu în rimă perfectă cu veselie este originar din Vadu Izei dar, până să ajungem în Maramureș, îl găsim în spațiul virtual, în mijlocul comunității sale numeroase de urmăritori, cântând mai tot timpul-live, impecabil și cu dulceață.</p><br/><p>Dincolo de mediul online, unde deja s-a instalat ca un curent artistic cu răsunet ‘𝘎Ă𝘛𝘌𝘑‘, Paul Ananie animă petrecerile cu lume multă, realizează emisiuni Tv și își dedică timpul rămas tot muzicii, reinventând-o mereu în cele mai năstrușnice versiuni. Videoclipul melodiei sale “Inimă, vreu să grăim” deschide o nouă perspectivă în industria videografică, fiind primul clip realizat în maniera unor desene animate din folclor, al unui artist popular din România. Și calitatea de lider de opinie a solistului maramureșean nu se rezumă aici, acesta fiind “fredonat”, “citat” și “integrat” în multe dintre activitățile celor care îi cunosc repertoriul și personalitatea.</p><br/><p>Și, ca să închei simetric acest scurt fragment de descriere, Ananie este mereu în rimă perfectă și cu prietenie, în virtutea căreia colaborările online se întâmplă.</p></div>'
    },
    {
        id: 10,
        title: "Interviu de vacanță cu Paul Ananie",
        image: "",
        author: "Adelina Fulga",
        content: '<div><p className="subtitle">Autoportret</p> <br/> <p>Natural. Și oleacă amuzant, cred. Sper. 😅</p><br/><p className="subtitle">Cireașa de pe tort</p><br/><p>Pfuu… depinde cum ne raportăm. Am avut câteva “cireșe” până acum, dar în diferite domenii. Unul dintre cele mai importante momente, spiritual vorbind, a fost atunci când l-am primit pe Papa cu pâine și sare iar Sanctitatea Sa mi-a strâns mâna și mi-a oferit un rozariu. 🙂</p><br/><p className="subtitle">Pastila de râs</p><br/><p>Sunt multe… De la microfoane-n dinți la împiedicat în culise chiar înainte de a intra pe scenă 🤣.</p><br/><p className="subtitle">Personajul-cheie</p><br/><p>Alexandru Pugna. Multe îi datorez acestui om extraordinar. M-a luat sub aripa sa și m-a crescut enorm, profesional vorbind.</p><br/><p className="subtitle">Călcâiul lui Ahile</p><br/><p>Eu. Eu sunt principala mea barieră, mintea mea este cea care îmi pune piedici câteodată. Dar tot ea mă ridică și mergem mai departe!</p></div><div><p>Paul Ananie, mereu în rimă perfectă cu veselie este originar din Vadu Izei dar, până să ajungem în Maramureș, îl găsim în spațiul virtual, în mijlocul comunității sale numeroase de urmăritori, cântând mai tot timpul-live, impecabil și cu dulceață.</p><br/><p>Dincolo de mediul online, unde deja s-a instalat ca un curent artistic cu răsunet ‘𝘎Ă𝘛𝘌𝘑‘, Paul Ananie animă petrecerile cu lume multă, realizează emisiuni Tv și își dedică timpul rămas tot muzicii, reinventând-o mereu în cele mai năstrușnice versiuni. Videoclipul melodiei sale “Inimă, vreu să grăim” deschide o nouă perspectivă în industria videografică, fiind primul clip realizat în maniera unor desene animate din folclor, al unui artist popular din România. Și calitatea de lider de opinie a solistului maramureșean nu se rezumă aici, acesta fiind “fredonat”, “citat” și “integrat” în multe dintre activitățile celor care îi cunosc repertoriul și personalitatea.</p><br/><p>Și, ca să închei simetric acest scurt fragment de descriere, Ananie este mereu în rimă perfectă și cu prietenie, în virtutea căreia colaborările online se întâmplă.</p></div>'
    },
    {
        id: 11,
        title: "Interviu de vacanță cu Paul Ananie",
        image: "",
        author: "Adelina Fulga",
        content: '<div><p className="subtitle">Autoportret</p> <br/> <p>Natural. Și oleacă amuzant, cred. Sper. 😅</p><br/><p className="subtitle">Cireașa de pe tort</p><br/><p>Pfuu… depinde cum ne raportăm. Am avut câteva “cireșe” până acum, dar în diferite domenii. Unul dintre cele mai importante momente, spiritual vorbind, a fost atunci când l-am primit pe Papa cu pâine și sare iar Sanctitatea Sa mi-a strâns mâna și mi-a oferit un rozariu. 🙂</p><br/><p className="subtitle">Pastila de râs</p><br/><p>Sunt multe… De la microfoane-n dinți la împiedicat în culise chiar înainte de a intra pe scenă 🤣.</p><br/><p className="subtitle">Personajul-cheie</p><br/><p>Alexandru Pugna. Multe îi datorez acestui om extraordinar. M-a luat sub aripa sa și m-a crescut enorm, profesional vorbind.</p><br/><p className="subtitle">Călcâiul lui Ahile</p><br/><p>Eu. Eu sunt principala mea barieră, mintea mea este cea care îmi pune piedici câteodată. Dar tot ea mă ridică și mergem mai departe!</p></div><div><p>Paul Ananie, mereu în rimă perfectă cu veselie este originar din Vadu Izei dar, până să ajungem în Maramureș, îl găsim în spațiul virtual, în mijlocul comunității sale numeroase de urmăritori, cântând mai tot timpul-live, impecabil și cu dulceață.</p><br/><p>Dincolo de mediul online, unde deja s-a instalat ca un curent artistic cu răsunet ‘𝘎Ă𝘛𝘌𝘑‘, Paul Ananie animă petrecerile cu lume multă, realizează emisiuni Tv și își dedică timpul rămas tot muzicii, reinventând-o mereu în cele mai năstrușnice versiuni. Videoclipul melodiei sale “Inimă, vreu să grăim” deschide o nouă perspectivă în industria videografică, fiind primul clip realizat în maniera unor desene animate din folclor, al unui artist popular din România. Și calitatea de lider de opinie a solistului maramureșean nu se rezumă aici, acesta fiind “fredonat”, “citat” și “integrat” în multe dintre activitățile celor care îi cunosc repertoriul și personalitatea.</p><br/><p>Și, ca să închei simetric acest scurt fragment de descriere, Ananie este mereu în rimă perfectă și cu prietenie, în virtutea căreia colaborările online se întâmplă.</p></div>'
    },
    {
        id: 12,
        title: "Interviu de vacanță cu Paul Ananie",
        image: "",
        author: "Adelina Fulga",
        content: '<div><p className="subtitle">Autoportret</p> <br/> <p>Natural. Și oleacă amuzant, cred. Sper. 😅</p><br/><p className="subtitle">Cireașa de pe tort</p><br/><p>Pfuu… depinde cum ne raportăm. Am avut câteva “cireșe” până acum, dar în diferite domenii. Unul dintre cele mai importante momente, spiritual vorbind, a fost atunci când l-am primit pe Papa cu pâine și sare iar Sanctitatea Sa mi-a strâns mâna și mi-a oferit un rozariu. 🙂</p><br/><p className="subtitle">Pastila de râs</p><br/><p>Sunt multe… De la microfoane-n dinți la împiedicat în culise chiar înainte de a intra pe scenă 🤣.</p><br/><p className="subtitle">Personajul-cheie</p><br/><p>Alexandru Pugna. Multe îi datorez acestui om extraordinar. M-a luat sub aripa sa și m-a crescut enorm, profesional vorbind.</p><br/><p className="subtitle">Călcâiul lui Ahile</p><br/><p>Eu. Eu sunt principala mea barieră, mintea mea este cea care îmi pune piedici câteodată. Dar tot ea mă ridică și mergem mai departe!</p></div><div><p>Paul Ananie, mereu în rimă perfectă cu veselie este originar din Vadu Izei dar, până să ajungem în Maramureș, îl găsim în spațiul virtual, în mijlocul comunității sale numeroase de urmăritori, cântând mai tot timpul-live, impecabil și cu dulceață.</p><br/><p>Dincolo de mediul online, unde deja s-a instalat ca un curent artistic cu răsunet ‘𝘎Ă𝘛𝘌𝘑‘, Paul Ananie animă petrecerile cu lume multă, realizează emisiuni Tv și își dedică timpul rămas tot muzicii, reinventând-o mereu în cele mai năstrușnice versiuni. Videoclipul melodiei sale “Inimă, vreu să grăim” deschide o nouă perspectivă în industria videografică, fiind primul clip realizat în maniera unor desene animate din folclor, al unui artist popular din România. Și calitatea de lider de opinie a solistului maramureșean nu se rezumă aici, acesta fiind “fredonat”, “citat” și “integrat” în multe dintre activitățile celor care îi cunosc repertoriul și personalitatea.</p><br/><p>Și, ca să închei simetric acest scurt fragment de descriere, Ananie este mereu în rimă perfectă și cu prietenie, în virtutea căreia colaborările online se întâmplă.</p></div>'
    },
]