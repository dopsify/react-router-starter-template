export default function Vision() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-4">
            The Future of Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Our Vision
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            In the near future, work will look fundamentally different
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-900 p-8 rounded-lg border border-slate-800 hover:border-blue-500/50 transition-all">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-2xl font-bold text-slate-50 mb-3">
              Small Teams, Big Impact
            </h3>
            <p className="text-slate-300">
              Small human teams will manage dozens of AI teammates
            </p>
          </div>
          <div className="bg-slate-900 p-8 rounded-lg border border-slate-800 hover:border-blue-500/50 transition-all">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-2xl font-bold text-slate-50 mb-3">
              Natural Language Automation
            </h3>
            <p className="text-slate-300">
              Work will be automated using natural language
            </p>
          </div>
          <div className="bg-slate-900 p-8 rounded-lg border border-slate-800 hover:border-blue-500/50 transition-all">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold text-slate-50 mb-3">
              Autonomous Operations
            </h3>
            <p className="text-slate-300">
              Operations will run autonomously
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-900/30 via-slate-950 to-slate-950 p-12 rounded-lg border border-blue-500/30 text-center">
          <p className="text-2xl md:text-3xl font-bold text-slate-50 mb-4">
            GlueAI is building the platform that makes this real.
          </p>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Join us in shaping the future of intelligent automation
          </p>
        </div>
      </div>
    </section>
  );
}

