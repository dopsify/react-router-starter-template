export default function UseCases() {
  const useCases = [
    {
      title: "Document Processing & Extraction",
      description: "Invoices, contracts, consulting deliverables, onboarding forms — automatically adapting to new formats.",
      icon: "📄",
      benefit: "90% time reduction",
      details: "No manual data entry. Handles format variations automatically.",
    },
    {
      title: "RFP & Proposal Creation",
      description: "2 weeks → 2–3 days with AI-assisted research, formatting, validation, and assembly.",
      icon: "📋",
      benefit: "5-10x faster & more effective",
      details: "From weeks to days. Complete proposals with AI assistance.",
    },
    {
      title: "Operational Intelligence",
      description: "Meeting notes, knowledge lookup, and system updates — automatically.",
      icon: "💡",
      benefit: "Automated operations",
      details: "Intelligent automation for daily operational tasks.",
    },
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            What You Can Automate Today
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            GlueAI is already powering automation for leading businesses
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-slate-900 p-8 rounded-lg border border-slate-800 hover:border-blue-500/50 transition-all transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{useCase.icon}</div>
              <h3 className="text-2xl font-bold text-slate-50 mb-3">
                {useCase.title}
              </h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                {useCase.description}
              </p>
              <div className="mb-3">
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold">
                  {useCase.benefit}
                </span>
              </div>
              <p className="text-sm text-slate-400 italic">
                {useCase.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

