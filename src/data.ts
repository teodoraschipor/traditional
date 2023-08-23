import { IFooterItem, IMenuItems } from "./TypesInterfaces";
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