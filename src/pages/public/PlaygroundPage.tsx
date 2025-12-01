export const PlaygroundPage = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">AI Playground (Mock)</h1>
      <p className="mt-2 text-gray-600">This is a demo. In production, this will connect to your AI backend.</p>
      <pre className="bg-gray-900 text-green-400 p-4 mt-4 rounded">
        {`-- AI Response (Mock)\nlocal player = game.Players.LocalPlayer\nprint("Hello, " .. player.Name)`}
      </pre>
    </div>
  );
};
