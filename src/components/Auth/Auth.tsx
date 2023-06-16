import { PageLayout } from '@components/Layout';
import { AppBar } from '@components/Layout/AppBar/AppBar';
import { Box, Button, Text, Textfield } from '@components/common';
import { urls } from '@constant/urls';
import { useAuth } from '@context/AuthProvider';
import { theme } from '@theme';
import { emailValidator, fetch } from '@utils';
import { ChangeEvent, FC, FormEvent, memo, useCallback, useEffect, useState } from 'react';
import { StyledBox, StyledForm } from './styled';

export const Auth: FC = memo(() => {
    const [username, setUsername] = useState('john@mail.com');
    const [pass, setPass] = useState('changeme');
    const [isDisabled, setIsDisabled] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { login } = useAuth();
    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === 'username') setUsername(value);
        else setPass(value);
    }, []);
    const handleSubmit = useCallback(
        async (event: FormEvent) => {
            event.preventDefault();
            // used mock API fixed email pass
            const config = {
                url: urls.login,
                data: {
                    email: username,
                    password: pass,
                },
                method: 'POST',
            };

            setIsLoading(true);

            const { response, error } = await fetch(config, '', true);

            if (response) return login?.({ tokens: response.data });
            if (error) {
                console.log(error.data.message);
                setError('Please enter valid email and password');
            }

            setIsLoading(false);
        },
        [login, pass, username],
    );

    useEffect(() => {
        if (username && pass) setIsDisabled(false);
    }, [pass, username]);

    return (
        <PageLayout>
            <AppBar />
            <Box justifyContent="center" alignItems="center">
                <StyledBox flexDirection="column" gap="3rem" justifyContent="center" alignItems="center">
                    <Text textColor="#fff" textVariant="h4" textWeight="Strong">
                        Login
                    </Text>
                    <StyledForm onSubmit={handleSubmit}>
                        <Textfield
                            fullWidth
                            type="text"
                            label="Username"
                            name="username"
                            value={username}
                            onChange={onChange}
                            placeholder="john@mail.com"
                            required
                            validator={emailValidator}
                        />
                        <Textfield
                            fullWidth
                            type="password"
                            label="Password"
                            name="pass"
                            value={pass}
                            onChange={onChange}
                            required
                        />
                        <Button type="submit" disabled={isDisabled} loading={isLoading}>
                            Submit
                        </Button>
                        <Text textColor={theme.colors.error.light}>{error}</Text>
                    </StyledForm>
                </StyledBox>
            </Box>
        </PageLayout>
    );
});

Auth.displayName = 'Auth';
