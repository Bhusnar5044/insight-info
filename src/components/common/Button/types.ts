export interface Props {
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    onClick?: () => void;
    loading?: boolean;
    title?: string;
}
