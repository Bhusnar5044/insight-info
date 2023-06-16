import { Value } from '@wojtekmaj/react-daterange-picker/dist/cjs/shared/types';
import { ChangeEvent } from 'react';

export type DateRange = Value;

export interface IControls {
    onSearch: (value: string) => void;
    onSortChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    sort: string;
    dateRange: DateRange;
    handleDateChange?: (value: DateRange) => void;
}
