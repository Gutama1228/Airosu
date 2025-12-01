export const Card = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <div className="mt-2">{children}</div>
    </div>
  );
};
