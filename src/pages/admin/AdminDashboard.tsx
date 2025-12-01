// src/pages/admin/AdminDashboard.tsx
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export const AdminDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Total Prompts">
          <p className="text-2xl font-bold">142</p>
        </Card>
        <Card title="Active Users">
          <p className="text-2xl font-bold">28</p>
        </Card>
        <Card title="AI Calls (24h)">
          <p className="text-2xl font-bold">1,024</p>
        </Card>
      </div>
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="flex gap-4">
          <Button variant="primary" href="/admin/prompts">
            Manage AI Prompts
          </Button>
        </div>
      </div>
    </div>
  );
};
