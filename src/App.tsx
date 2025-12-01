// src/App.tsx
import { RouterProvider } from 'react-router-dom';
import appRouter from './app/routes/AppRoutes.tsx';
import { AuthProvider } from './app/providers/AuthProvider';
import { ThemeProvider } from './app/providers/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={appRouter} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
