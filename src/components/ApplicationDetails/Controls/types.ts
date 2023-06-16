import { ChangeEvent } from 'react';

export interface IControls {
    onSearch: (value: string) => void;
    onSortChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    sort: string;
}
