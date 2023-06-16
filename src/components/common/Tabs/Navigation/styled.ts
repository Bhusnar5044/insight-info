import { theme } from '@theme';
import { styled } from '@utils';

export const TabNavList = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    padding: 10px 0 30px;
`;

export const TabItem = styled.li`
    &:not(:last-child) {
        margin-right: 20px;
    }
`;

export const TaButton = styled.button`
    background: rgba(0, 0, 0, 0);
    padding: 4px;
    color: #ffff;
    box-shadow: none;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 20px;
    display: block;
    position: relative;
    font-family: inherit;
    font-weight: 400;

    &:after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 2px;
        background: ${theme.colors.other.pink};
        opacity: 0;
        visibility: hidden;
        transition: visibility 0s, opacity 0.4s ease-in-out;
    }

    &.active::after {
        opacity: 1;
        visibility: visible;
        transition: visibility 0s, opacity 0.4s ease-in-out;
    }
`;
