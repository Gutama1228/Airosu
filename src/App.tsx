import { RouterProvider } from 'react-router-dom';
import appRouter from './app/routes/AppRoutes.tsx';

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
