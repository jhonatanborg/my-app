import { FC, createContext, useEffect, useState, useContext } from 'react';

import { loginAuth } from '../api/services/auth';

interface IAuthContextData {
  signed: boolean;
  user: object | null;
  signIn(user: object): Promise<void>;
  Logout(): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  useEffect(() => {
    const storagedUser = sessionStorage.getItem('@App:user');
    const storagedToken = sessionStorage.getItem('@App:token');

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
    }
  }, []);
  async function signIn(userData: object) {
    const response = await loginAuth(userData);
    setUser(response.data.user);
    sessionStorage.setItem('@App:user', JSON.stringify(response.data.user));
    sessionStorage.setItem('@App:token', response.data.token);
  }
  function Logout() {
    setUser(null);
  }
  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
export { AuthProvider, useAuth };
