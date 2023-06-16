import { ChangeEvent } from 'react';

export interface InputWrapperProps {
    for?: string;
    fullWidth?: boolean;
    minWidth?: string;
    errorText?: string;
    isValid?: boolean;
}
export interface Props extends InputWrapperProps {
    label: string;
    name?: string;
    value: any;
    type?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    validator?: (value: any, required?: boolean) => string;
}
