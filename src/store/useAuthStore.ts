// src/store/useAuthStore.ts
import { create } from 'zustand';

interface User {
  email: string;
  role: 'admin' | 'user';
}

interface AuthState {
  user: User | null;
  loading: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  login: (user) => {
    localStorage.setItem('admin_token', 'mock-jwt-token');
    set({ user, loading: false });
  },
  logout: () => {
    localStorage.removeItem('admin_token');
    set({ user: null });
  },
}));