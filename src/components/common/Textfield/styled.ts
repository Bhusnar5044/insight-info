import { theme } from '@theme';
import { styled } from '@utils';
import Box from '../Box';
import { InputWrapperProps } from './types';

export const Label = styled.label`
    position: absolute;
    top: 20px;
    left: 12px;
    font-size: 16px;
    color: rgba(${theme.colors.info.dark}, 0.5);
    font-weight: 500;
    transform-origin: 0 0;
    transform: translate3d(0, 0, 0);
    transition: all 0.2s ease;
    pointer-events: none;
`;

export const Input = styled.input`
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    border: 0;
    font-family: inherit;
    padding: 16px 12px 0 12px;
    height: 56px;
    font-size: 16px;
    font-weight: 400;
    background: rgba(${theme.colors.info.dark}, 0.02);
    box-shadow: inset 0 -1px 0 rgba(${theme.colors.info.dark}, 0.3);
    color: ${theme.colors.info.dark};
    transition: all 0.15s ease;

    &:hover {
        background: rgba(${theme.colors.info.dark}, 0.04);
        box-shadow: inset 0 -1px 0 rgba(${theme.colors.info.dark}, 0.5);
    }

    &:not(:placeholder-shown) + ${Label} {
        color: rgba(${theme.colors.info.dark}, 0.5);
        transform: translate3d(0, -12px, 0) scale(0.75);
    }

    &:focus {
        background: rgba(${theme.colors.info.dark}, 0.05);
        outline: none;
        box-shadow: inset 0 -2px 0 ${theme.colors.primary.main};
        + ${Label} {
            color: ${theme.colors.primary.main};
            transform: translate3d(0, -12px, 0) scale(0.75);
            + .focus-bg {
                transform: scaleX(1);
                transition: all 0.1s ease;
            }
        }
    }
`;

export const InputWrapper = styled.label<InputWrapperProps>`
    position: relative;
    border-radius: 3px;
    overflow: hidden;
    width: ${({ fullWidth }) => fullWidth && '100%'};
    min-width: ${({ minWidth }) => minWidth};
    ${({ errorText, isValid }) => (errorText || !isValid ? `border: 1px solid ${theme.colors.error.light};` : '')}
    .focus-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(${theme.colors.info.light}, 0.05);
        z-index: -1;
        transform: scaleX(0);
        transform-origin: left;
    }

    ${Input} {
        width: ${({ fullWidth }) => fullWidth && '100%'};
        min-width: ${({ minWidth }) => minWidth};
    }
`;

export const Wrapper = styled(Box)<InputWrapperProps>`
    width: ${({ fullWidth }) => fullWidth && '100%'};
    min-width: ${({ minWidth }) => minWidth};
`;
