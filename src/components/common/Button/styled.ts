import { theme } from '@theme';
import { keyframes, styled } from '@utils';
import { Props } from './types';

const buttonSpinner = keyframes`
    from {
        transform: rotate(0turn);
    }

    to {
        transform: rotate(1turn);
    }
`;
export const ButtonContainer = styled.button<Props>`
    position: relative;
    display: inline-block;
    outline: none;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    text-align: center;
    border: unset;
    padding: 1rem 2rem;
    color: #fff;
    background: ${theme.colors.success.main};
    border-radius: 0.8rem;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(0, 0, 0, 0.2) 0px -1px 0px 0px inset;
    opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
    pointer-events: ${({ disabled }) => disabled && 'none'};
    &:hover {
        background: ${theme.colors.success.light};
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    &.loading {
        cursor: not-allowed;
        pointer-events: none;
        opacity: 0.7;
        &::after {
            content: '';
            position: absolute;
            width: 2rem;
            height: 2rem;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            border: 0.4rem solid transparent;
            border-top-color: ${theme.colors.primary.dark};
            border-right-color: ${theme.colors.primary.dark};
            border-radius: 50%;
            animation: ${buttonSpinner} 1s ease infinite;
        }
    }
`;
