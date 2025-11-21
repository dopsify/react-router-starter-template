export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-50 text-center mb-4">
          Pricing
        </h2>
        <p className="text-xl text-slate-300 text-center mb-12 max-w-2xl mx-auto">
          Transparent, value-based pricing aligned to hours saved
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-950 p-8 rounded-lg border border-blue-500/30 mb-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-3">💼</div>
                <h3 className="text-xl font-bold text-slate-50 mb-2">
                  One-Time Onboarding
                </h3>
                <p className="text-slate-400 text-sm">
                  Get started with expert setup and configuration
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">📅</div>
                <h3 className="text-xl font-bold text-slate-50 mb-2">
                  Monthly Platform Subscription
                </h3>
                <p className="text-slate-400 text-sm">
                  Ongoing access to the AgentFlow platform
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-xl font-bold text-slate-50 mb-2">
                  Value-Based Usage Pricing
                </h3>
                <p className="text-slate-400 text-sm">
                  Aligned to hours saved, not just usage
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 p-8 rounded-lg border border-blue-500/30 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">
              $20k–25k+ Monthly Value
            </div>
            <p className="text-xl text-slate-300 mb-4">
              Per AgentFlow deployment
            </p>
            <p className="text-slate-400">
              Many deployments yield significant ROI through time savings and effectiveness gains
            </p>
          </div>

          <div className="mt-8 text-center">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-600/50">
              Schedule a Live Demo →
            </button>
            <p className="text-slate-400 mt-4 text-sm">
              Get a custom quote based on your specific needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

