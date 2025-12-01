// src/features/auth/components/AuthGuard.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate(); // ✅ biarkan ini, tapi gunakan!

  useEffect(() => {
    const token = localStorage.getItem('airosu_admin_token');
    if (!token) {
      // Redirect ke login jika tidak ada token
      navigate('/login');
      return;
    }
  }, [navigate]);

  const token = localStorage.getItem('airosu_admin_token');
  if (!token) return null;

  return <>{children}</>;
};
