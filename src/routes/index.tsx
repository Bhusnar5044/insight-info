import ApplicationDetails from '@components/ApplicationDetails';
import Auth from '@components/Auth';
import Dashboard from '@components/Dashboard';
import ContainerLoader from '@components/Loader';
import Profile from '@components/Profile';
import { routeConstant } from '@constant/routeConstant';
import { FC, Suspense } from 'react';
import { Route, Routes as RoutesWrapper } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';

export const Routes: FC = () => {
    return (
        <Suspense fallback={<ContainerLoader />}>
            <RoutesWrapper>
                <Route element={<ProtectedRoutes />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path={routeConstant.profile} element={<Profile />} />
                    <Route path={routeConstant.appDetails} element={<ApplicationDetails />} />
                </Route>
                <Route path={routeConstant.login} element={<Auth />} />
            </RoutesWrapper>
        </Suspense>
    );
};
