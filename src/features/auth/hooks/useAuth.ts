// src/features/auth/hooks/useAuth.ts
import { useEffect, useState } from 'react';
import { useAuthStore } from '../../../store/useAuthStore';

export const useAuth = () => {
  const { user, login, logout, loading } = useAuthStore();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Cek token di localStorage saat pertama kali
    const token = localStorage.getItem('admin_token');
    if (token) {
      // Mock validasi
      login({ email: 'admin@robloxdev.ai', role: 'admin' });
    }
    setIsHydrated(true);
  }, [login]);

  return {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    loading: !isHydrated || loading,
  };
};