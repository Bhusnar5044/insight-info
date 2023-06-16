import { PageLayout } from '@components/Layout';
import AppBar from '@components/Layout/AppBar';
import { useAuth } from '@context/AuthProvider';
import { Navigate, useOutlet } from 'react-router-dom';

export const ProtectedRoutes = () => {
    const { tokens } = useAuth();
    const outlet = useOutlet();

    if (!tokens?.access_token) {
        return <Navigate to="/login" />;
    }

    return (
        <PageLayout>
            <AppBar />
            {outlet}
        </PageLayout>
    );
};
