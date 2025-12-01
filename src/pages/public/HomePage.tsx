export const HomePage = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Welcome to Airosu</h1>
      <p className="mt-2 text-gray-600">
        AI-powered assistant to help Roblox Studio developers write better Lua code.
      </p>
      <div className="mt-6">
        <a href="/playground" className="inline-block px-4 py-2 bg-roblox text-white rounded hover:bg-blue-600">
          Try AI Playground
        </a>
      </div>
    </div>
  );
};
