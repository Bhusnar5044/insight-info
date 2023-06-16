import { theme } from '@theme';
import { styled } from '@utils';
import { InputWrapperProps } from './types';

export const Input = styled.input`
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    border: 0;
    font-family: inherit;
    font-size: 16px;
    font-weight: 400;
    background: #ffff;
    box-shadow: inset 0 -1px 0 rgba(${theme.colors.info.dark}, 0.3);
    color: ${theme.colors.info.dark};
    transition: all 0.15s ease;
    outline: none;
`;

export const InputWrapper = styled.div<InputWrapperProps>`
    position: relative;
    border-radius: 3px;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    overflow: hidden;
    width: ${({ fullWidth }) => (fullWidth ? '100%' : '23rem')};
    background-color: #ffff;
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
        width: ${({ fullWidth }) => (fullWidth ? '100%' : '20rem')};
    }
    img {
        cursor: pointer;
        width: 1.2rem;
        height: 1.2rem;
    }
`;
