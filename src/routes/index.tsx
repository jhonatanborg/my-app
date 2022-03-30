import React from 'react';
import { useAuth } from '../contexts/auth';
import AuthRoutes from './AuthRoutes';
import AppRoutes from './AppRoutes';

const Routes: React.FC = () => {
    const { signed } = useAuth();
    return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;