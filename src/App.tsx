// src/app/routes/AppRoutes.tsx
import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import { HomePage } from '../../pages/public/HomePage';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
    ],
  },
]);

export default appRouter;
