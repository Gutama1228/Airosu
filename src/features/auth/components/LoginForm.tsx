// src/features/auth/components/LoginForm.tsx
export const LoginForm = () => {
  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-4"
        />
        <button
          type="submit"
          className="w-full bg-roblox text-white py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};
