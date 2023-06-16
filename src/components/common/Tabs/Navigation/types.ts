import { ITabNavigation } from '../types';

export interface Props {
    tabs: ITabNavigation[];
    activeTabId: string | number;
    onNavClick: (id: string | number) => void;
}
