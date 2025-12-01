import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import { HomePage } from '../../pages/public/HomePage';
import { PlaygroundPage } from '../../pages/public/PlaygroundPage';
import { AdminDashboard } from '../../pages/admin/AdminDashboard';
import { LoginForm } from '../../features/auth/components/LoginForm';
import { PublicLayout } from '../../components/layout/PublicLayout';
import { AdminLayout } from '../../components/layout/AdminLayout';
import { AuthGuard } from '../../features/auth/components/AuthGuard';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <PublicLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: 'playground', element: <PlaygroundPage /> },
        ],
      },
      {
        path: 'admin',
        element: (
          <AuthGuard>
            <AdminLayout />
          </AuthGuard>
        ),
        children: [
          { index: true, element: <AdminDashboard /> },
        ],
      },
      { path: 'login', element: <LoginForm /> },
    ],
  },
]);

export default appRouter;
