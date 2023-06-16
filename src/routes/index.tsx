import ContainerLoader from '@components/Loader';
import Auth from '@pages/Auth';
// import Dashboard from '@pages/Dashboard';
import { ApplicationDetails } from '@components/ApplicationDetails/ApplicationDetails';
import { routeConstant } from '@constant/routeConstant';
import Dashboard from '@pages/Dashboard';
import Profile from '@pages/Profile';
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
