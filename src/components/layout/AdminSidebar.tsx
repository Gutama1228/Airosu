// src/components/layout/AdminSidebar.tsx
export const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-sm">
      <div className="p-4">
        <h2 className="font-bold">Admin Panel</h2>
        <nav className="mt-4 space-y-2">
          <a href="/admin" className="block text-sm text-gray-700 hover:text-roblox">Dashboard</a>
          <a href="/admin/prompts" className="block text-sm text-gray-700 hover:text-roblox">Prompts</a>
        </nav>
      </div>
    </aside>
  );
};
