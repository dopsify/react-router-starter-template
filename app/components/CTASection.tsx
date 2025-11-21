export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-900/30 via-slate-900 to-slate-950">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
          Ready to Automate Real Operational Work?
        </h2>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          See how AgentFlow can transform your operations with AI agents that think like humans and execute with workflow reliability
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-600/50">
            Schedule a Live Demo →
          </button>
          <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-50 rounded-lg text-lg font-semibold transition-colors border border-slate-700">
            Talk to an Automation Specialist
          </button>
        </div>
        <p className="text-sm text-slate-400">
          See AgentFlow in action • Get a custom solution • No commitment required
        </p>
      </div>
    </section>
  );
}

