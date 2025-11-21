export default function ProblemSolution() {
  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Automation Today is Broken
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            The simple statement of the problem
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="bg-slate-950 p-8 rounded-lg border border-red-500/20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">❌</span>
              <h3 className="text-3xl font-bold text-slate-50">
                The Problem
              </h3>
            </div>
            <div className="space-y-4 text-lg text-slate-300">
              <div className="p-4 bg-slate-900 rounded-lg">
                <p className="font-semibold text-slate-200 mb-2">Workflows are reliable but fragile</p>
                <p className="text-slate-400">Break when data, formats, or rules change</p>
              </div>
              <div className="p-4 bg-slate-900 rounded-lg">
                <p className="font-semibold text-slate-200 mb-2">AI agents are flexible but unpredictable</p>
                <p className="text-slate-400">Hard to debug, control, or maintain</p>
              </div>
              <p className="text-xl font-semibold text-slate-50 pt-4">
                Businesses need both — structure and intelligence.
              </p>
            </div>
          </div>
          <div className="bg-slate-950 p-8 rounded-lg border border-green-500/20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">✅</span>
              <h3 className="text-3xl font-bold text-slate-50">
                What GlueAI Does
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-xl font-semibold text-blue-400 mb-4">
                GlueAI introduces AgentFlow:
              </p>
              <ul className="space-y-3 text-lg text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Automation that <strong className="text-green-400">reasons, decides, executes</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span><strong className="text-green-400">Improves over time</strong> automatically</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span><strong className="text-green-400">Full observability and control</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span><strong className="text-green-400">No maintenance</strong> required</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-950 p-8 rounded-lg border border-blue-500/30 mb-12">
          <h3 className="text-3xl font-bold text-slate-50 mb-6 text-center">
            How AgentFlow Works
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-slate-900 rounded-lg">
              <div className="text-2xl mb-2">🔄</div>
              <p className="font-semibold text-slate-200 mb-1">Workflow Engine</p>
              <p className="text-sm text-slate-400">Every agent runs inside a workflow engine</p>
            </div>
            <div className="p-4 bg-slate-900 rounded-lg">
              <div className="text-2xl mb-2">🔍</div>
              <p className="font-semibold text-slate-200 mb-1">Fully Traceable</p>
              <p className="text-sm text-slate-400">Every step is traceable and debuggable</p>
            </div>
            <div className="p-4 bg-slate-900 rounded-lg">
              <div className="text-2xl mb-2">🤖</div>
              <p className="font-semibold text-slate-200 mb-1">Auto-Decision</p>
              <p className="text-sm text-slate-400">The agent chooses the next step automatically</p>
            </div>
            <div className="p-4 bg-slate-900 rounded-lg">
              <div className="text-2xl mb-2">🔄</div>
              <p className="font-semibold text-slate-200 mb-1">Self-Adapting</p>
              <p className="text-sm text-slate-400">Adapts when data, formats, or rules change</p>
            </div>
            <div className="p-4 bg-slate-900 rounded-lg">
              <div className="text-2xl mb-2">📈</div>
              <p className="font-semibold text-slate-200 mb-1">Continuous Learning</p>
              <p className="text-sm text-slate-400">Gets smarter the more it runs</p>
            </div>
            <div className="p-4 bg-slate-900 rounded-lg">
              <div className="text-2xl mb-2">⚡</div>
              <p className="font-semibold text-slate-200 mb-1">Zero Maintenance</p>
              <p className="text-sm text-slate-400">No consultants or brittle scripts needed</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 p-8 rounded-lg border border-blue-500/30">
          <h3 className="text-2xl font-bold text-slate-50 mb-4 text-center">
            Why It's Better
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🎯</div>
              <p className="font-semibold text-slate-200">Predictability</p>
              <p className="text-sm text-slate-400">Like workflows</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🧠</div>
              <p className="font-semibold text-slate-200">Intelligence</p>
              <p className="text-sm text-slate-400">Like agents</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🚀</div>
              <p className="font-semibold text-slate-200">Auto-Improvement</p>
              <p className="text-sm text-slate-400">Continuously improves automatically</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-slate-300">
              <span className="line-through text-slate-500">No consultants.</span>{" "}
              <span className="line-through text-slate-500">No brittle scripts.</span>{" "}
              <span className="line-through text-slate-500">No manual rework when something changes.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

