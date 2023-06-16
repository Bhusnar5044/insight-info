import { FontVariants, FontWeights } from '@theme/font/types';
import { HTMLProps } from '@utils/types';

interface CommonProps extends HTMLProps<HTMLElement> {
    textColor?: string;
    uppercase?: boolean;
    lineThrough?: boolean;
    fullWidth?: boolean;
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}

export interface TextProps extends CommonProps {
    textVariant?: FontVariants;
    textWeight?: FontWeights;
    textAlign?: 'initial' | 'left' | 'right' | 'center';
}
