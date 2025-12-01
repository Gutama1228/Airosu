// src/app/routes/AppRoutes.tsx
import { createBrowserRouter } from 'react-router-dom';
import { App } from '../../App';
import { HomePage } from '../../pages/public/HomePage';
import { PlaygroundPage } from '../../pages/public/PlaygroundPage';
import { AdminDashboard } from '../../pages/admin/AdminDashboard';
import { ManagePrompts } from '../../pages/admin/ManagePrompts';
import { LoginForm } from '../../features/auth/components/LoginForm';
import { AdminLayout } from '../../components/layout/AdminLayout';
import { PublicLayout } from '../../components/layout/PublicLayout';
import { AuthGuard } from '../../features/auth/components/AuthGuard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // Public routes
      {
        element: <PublicLayout />,
        children: [
          { path: '/', element: <HomePage /> },
          { path: '/playground', element: <PlaygroundPage /> },
        ],
      },
      // Admin routes
      {
        path: '/admin',
        element: (
          <AuthGuard>
            <AdminLayout />
          </AuthGuard>
        ),
        children: [
          { index: true, element: <AdminDashboard /> },
          { path: 'prompts', element: <ManagePrompts /> },
          { path: 'users', element: <div>Manage Users</div> },
          { path: 'settings', element: <div>Settings</div> },
        ],
      },
      // Auth routes
      { path: '/login', element: <LoginForm /> },
    ],
  },
]);

export default router;