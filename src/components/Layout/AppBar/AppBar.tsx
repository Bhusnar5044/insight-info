import { Box, Text } from '@components/common';
import { useAuth } from '@context/AuthProvider';
import { FC, memo } from 'react';
import { HeaderContainer, HeaderContent, Logo, StyledLink } from './AppBar.styled';

export const AppBar: FC = memo(() => {
    const { tokens, logout } = useAuth();
    const handleLogout = () => {
        logout?.();
    };
    return (
        <HeaderContainer>
            <HeaderContent>
                <Box gap="2rem" alignItems="center">
                    <Logo src="/vite.svg" />
                    <Text>React JWT Demo</Text>
                </Box>
                {tokens?.access_token && (
                    <Box gap="2rem" alignItems="center">
                        <StyledLink to={'/'} activeClassName={location.pathname === `/` ? 'active' : ''}>
                            <Text>Dashboard</Text>
                        </StyledLink>
                        <StyledLink to={'/profile'} activeClassName={location.pathname === `/profile` ? 'active' : ''}>
                            <Text>Profile</Text>
                        </StyledLink>

                        <Text as={'a'} onClick={handleLogout}>
                            Logout
                        </Text>
                    </Box>
                )}
            </HeaderContent>
        </HeaderContainer>
    );
});

AppBar.displayName = 'AppBar';
