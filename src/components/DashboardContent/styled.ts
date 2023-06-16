import { Box } from '@components/common';
import { theme } from '@theme';
import { styled } from '@utils';
import { NavLink } from 'react-router-dom';

export const Container = styled(Box)`
    width: 90%;
    min-height: 90vh;
    margin: 2rem 0;
`;

export const StyledCardContainer = styled(Box)`
    margin: 2rem 0;
`;

export const StyledCard = styled(NavLink)`
    width: 90%;
    align-items: center;
    user-select: none;
    padding: 1rem;
    text-align: left;
    color: unset;
    border: 0.1rem solid ${theme.colors.other.purple};
    border-radius: 0.5rem;
    &:hover {
        border: 0.1rem solid ${theme.colors.other.purpleTypo};
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
`;
