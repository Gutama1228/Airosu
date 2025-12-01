// src/app/providers/AuthProvider.tsx
import { createContext, useContext, useEffect, useState } from 'react';

type AuthContextType = {
  user: { email: string } | null;
  login: (email: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<{ email: string } | null>(null);

  useEffect(() => {
    const email = localStorage.getItem('admin_email');
    if (email) setUser({ email });
  }, []);

  const login = (email: string) => {
    localStorage.setItem('admin_email', email);
    setUser({ email });
  };

  const logout = () => {
    localStorage.removeItem('admin_email');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
