import { theme } from '@theme';
import { WithThemeProp } from '@utils/types';
import styled, { css } from 'styled-components';
import { TextProps } from './types';

const uppercase = () => css`
    text-transform: uppercase;
`;

const lineThrough = () => css`
    text-decoration: line-through;
`;
const getTextStyle = (props: TextProps) => {
    const { textColor, textVariant, textWeight, textAlign } = props,
        { defaults, weights, variants } = theme.font,
        { fontSize, fontWeight, lineHeight, letterSpacing } = variants[textVariant || defaults.variant];

    return css`
        margin: 0;
        color: ${textColor};
        font-size: ${fontSize};
        font-weight: ${weights[textWeight || fontWeight]};
        letter-spacing: ${letterSpacing};
        line-height: ${lineHeight};
        text-align: ${textAlign};
    `;
};

export const TextStyled = styled('span')<TextProps & WithThemeProp>`
    ${getTextStyle}

    ${({ fullWidth, theme }) =>
        fullWidth &&
        css`
            display: block;
            margin: ${theme.spacing.S2} 0;
        `}

    ${(props) => props.uppercase && uppercase()};
    ${(props) => props.lineThrough && lineThrough()};
    display: ${({ as }) => (as === 'strong' || as === 'span' || as === 'a') && 'inline-block'};
`;

TextStyled.defaultProps = {
    theme: theme,
};
