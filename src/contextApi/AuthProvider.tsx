import { urls } from '@constant/urls';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { fetch } from '@utils';
import { FC, PropsWithChildren, createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IAuthContext } from './types';

const initialValue = { tokens: {}, profileInfo: {} };

const AuthContext = createContext<IAuthContext>(initialValue);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', initialValue);
    const [profileInfo, setProfileInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const fetchProfileDetails = useCallback(async () => {
        setIsLoading(true);
        const { response, error } = await fetch({ url: urls.profile });
        if (response) setProfileInfo(response.data);

        if (error) console.log(error);

        setIsLoading(false);
    }, []);

    const login = useCallback(
        async (data: any) => {
            setUser(data);
            fetchProfileDetails();
            navigate('/', { replace: true });
        },
        [fetchProfileDetails, navigate, setUser],
    );

    const logout = useCallback(() => {
        setUser(null);
        navigate('/', { replace: true });
    }, [navigate, setUser]);

    const value = useMemo(
        () => ({
            ...user,
            profileInfo,
            isLoading,
            login,
            logout,
            fetchProfileDetails,
        }),
        [fetchProfileDetails, isLoading, login, logout, profileInfo, user],
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
