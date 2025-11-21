export default function Hero() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-slate-950"></div>
      <div className="container mx-auto text-center relative z-10">
        <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-6">
          🤖 Next Gen Automation Platform
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-50 mb-6 leading-tight">
          The AgentFlow
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Automation Platform
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto font-medium">
          Deep AI agents that think like humans and execute with the reliability of workflows
        </p>
        <p className="text-lg text-blue-400 mb-8 max-w-2xl mx-auto font-semibold">
          Keep evolving with no maintenance
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-600/50">
            Book a Demo →
          </button>
          <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-50 rounded-lg text-lg font-semibold transition-colors border border-slate-700">
            Watch AgentFlow in Action
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>Full observability & control</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>Self-improving agents</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>No maintenance required</span>
          </div>
        </div>
      </div>
    </section>
  );
}

