import { theme } from '@theme';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const HeaderContainer = styled('header')`
    display: flex;
    align-items: center;
    width: 100%;
    margin: auto;
    background-color: ${theme.colors.success.main};
    padding: 1rem 0;
`;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: auto;
    color: #fff;
    a:hover {
        color: ${theme.colors.info.main};
    }
`;

export const Logo = styled.img`
    width: 2.5rem;
    height: auto;
`;

export const StyledLink = styled(NavLink)<{ activeClassName?: string }>`
    color: #fff;
    :hover {
        color: ${theme.colors.info.main};
    }
    &.active {
        color: ${theme.colors.info.main};
    }
`;
