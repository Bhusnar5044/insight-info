import { theme } from '@theme';
import { styled } from '@utils';

export const PageLayoutStyled = styled('div')`
    display: grid;
    height: 100%;
    min-height: 100vh;
    width: 100%;
    grid-template-areas:
        'header'
        'main';
    grid-template-columns: 1fr;
    grid-template-rows: 4.2em auto;
    background-color: ${theme.colors.other.purple};
    overflow: unset;

    & > header {
        grid-area: header;
    }

    & > main {
        grid-area: main;
        transition: width 200ms;
        padding-bottom: 35px;
    }
`;
