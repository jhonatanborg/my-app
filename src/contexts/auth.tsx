import React, { createContext, useEffect, useState, useContext } from 'react';
import { signIn } from '../api/services/auth';

interface AuthContextData {
    signed: boolean;
    user: object | null;
    Login(user: object): Promise<void>;
    Logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<object | null>(null);
    useEffect(() => {
        const storagedUser = sessionStorage.getItem('@App:user');
        const storagedToken = sessionStorage.getItem('@App:token');

        if (storagedToken && storagedUser) {
            setUser(JSON.parse(storagedUser));
        }
    }, []);
    async function Login(userData: object) {
        const response = await signIn(userData);
        setUser(response.data.user);
        sessionStorage.setItem('@App:user', JSON.stringify(response.data.user));
        sessionStorage.setItem('@App:token', response.data.token);
    }
    function Logout() {
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{ signed: !!user, user, Login, Logout }}>
            {children}
        </AuthContext.Provider>
    );

};


function useAuth() {
    const context = useContext(AuthContext);
    return context;
}
export { AuthProvider, useAuth };