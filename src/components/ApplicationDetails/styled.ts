import { Box } from '@components/common';
import { theme } from '@theme';
import { styled } from '@utils';

export const CardContainer = styled(Box)`
    width: 90%;
    margin: 2rem auto;
`;
export const Card = styled(Box)`
    min-width: 22rem;
    padding: 2rem;
    text-align: left;
    color: ${theme.colors.other.purpleTypo};
    background-color: ${theme.colors.other.lightPurple};
    border: 0.1rem solid ${theme.colors.other.lightPurple};
    border-radius: 0.5rem;
    &:hover {
        border: 0.1rem solid ${theme.colors.other.lightPurple};
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
`;
