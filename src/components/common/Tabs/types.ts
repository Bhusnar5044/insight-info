export interface ITabNavigation {
    id: string | number;
    title: string;
}
export interface TabData extends ITabNavigation {
    content: JSX.Element;
}
export interface Props {
    data: TabData[];
}
