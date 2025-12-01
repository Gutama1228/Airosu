import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Mock: simulate login with localStorage
    const token = localStorage.getItem('airosu_admin_token');
    if (!token) {
      localStorage.setItem('airosu_admin_token', 'mock-token'); // auto-login for demo
    }
  }, []);

  return <>{children}</>;
};
