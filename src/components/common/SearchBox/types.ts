export interface InputWrapperProps {
    for?: string;
    fullWidth?: boolean;
}
export interface Props extends InputWrapperProps {
    name?: string;
    type?: string;
    onSearch: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
}
