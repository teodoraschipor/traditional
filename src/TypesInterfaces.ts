export interface IMenuItems {
    name: string;
    path: string;
}

export type FooterFieldType = "phone" | "email" | "url";

export interface IFooterSection {
    name: string,
    type: FooterFieldType,
    path: string,
}

export interface IFooterItem {
    title: string;
    section: IFooterSection[]
}

export interface IAppText extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
    className?: string
}

export interface IGalleryItem {
    id: number,
    imageSource: string,
    title: string,
    onClick?: boolean,
}

export interface ICarouselItem {
    id: number,
    imageSource: string,
    title: string,
    onClick?: boolean,
}

export interface IStire {
    id: number,
    title: string,
    image: string,
    author: string,
    content: string,
}

export interface IEmisiune {
    id: number,
    title: string,
    image: string,
    author: string,
    content: string,
}

export interface ILoadingContextValue {
    loading: boolean,
    setLoading: (loading: boolean) => void,
}