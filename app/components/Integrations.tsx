export default function Integrations() {
  const integrations = [
    { name: "Gmail", icon: "📧" },
    { name: "Google Drive", icon: "📁" },
    { name: "Google Sheets", icon: "📊" },
    { name: "Databases", icon: "🗄️" },
    { name: "Slack", icon: "💬" },
    { name: "Notion", icon: "📝" },
    { name: "Internal Systems", icon: "🔧" },
  ];

  return (
    <section id="integrations" className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-50 text-center mb-4">
          Connect to Your Stack
        </h2>
        <p className="text-xl text-slate-300 text-center mb-4 max-w-2xl mx-auto">
          Out-of-the-box support for your existing tools
        </p>
        <p className="text-slate-400 text-center mb-12">
          (More integrations on the way)
        </p>
        <div className="grid md:grid-cols-3 lg:grid-cols-7 gap-6">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-slate-950 p-6 rounded-lg border border-slate-800 hover:border-blue-500/50 transition-all transform hover:scale-105 text-center"
            >
              <div className="text-3xl mb-2">{integration.icon}</div>
              <div className="text-slate-50 font-semibold text-sm">
                {integration.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

