import { TraditionalTvRoutesNames } from "./routes-names";

export interface TraditionalTvRoutesConfig {
    path: string,
}

export const TraditionalTvRoutes: Record<TraditionalTvRoutesNames,TraditionalTvRoutesConfig > = {
    ACASA: {
        path: "/"
    },
    STIRI: {
        path: "/stiri"
    },
    EMISIUNI: {
        path: "/emisiuni"
    },
    TRADITIONALIDESEAMA: {
        path: "/traditionali-de-seama"
    },
    CONTACT: {
        path: "/contact"
    },
    LIVE: {
        path: "/live"
    },
    ECHIPA: {
        path: "/echipa"
    },
    DESPRECOMUNITATE: {
        path: "/despre-comunitate"
    },
    CONFIDENTIALITATE: {
        path: "/confidentialitate-si-cookies"
    },
    TERMENICONDITII: {
        path: "/termeni-si-conditii"
    },
    INFORMATII: {
        path: "/informatii-de-interes-public"
    },
    CODCONDUITA: {
        path: "/cod-de-conduita"
    },
    STIRIITEM: {
        path: "/stiri/:id"
    }
}