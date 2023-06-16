import { ChangeEvent } from 'react';

export type Options = { value: string; label: string; disabled?: boolean }[];

export type Props = {
    options: Options;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    value: string | number;
};
