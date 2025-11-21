export default function Results() {
  const results = [
    {
      metric: "5-10×",
      label: "Faster & More Effective",
      description: "Customers report dramatic speed and effectiveness improvements",
    },
    {
      metric: "90%",
      label: "Time Reduction",
      description: "Cut processing time dramatically",
    },
    {
      metric: "90%",
      label: "Effectiveness Improvement",
      description: "Not just efficient, but truly effective results",
    },
    {
      metric: "$20k-25k+",
      label: "Monthly Value",
      description: "Per AgentFlow deployment",
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-50 text-center mb-4">
          Results We're Seeing
        </h2>
        <p className="text-xl text-slate-300 text-center mb-12 max-w-2xl mx-auto">
          Customers report remarkable improvements across the board
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, index) => (
            <div
              key={index}
              className="text-center bg-slate-950 p-8 rounded-lg border border-slate-800 hover:border-blue-500/50 transition-all transform hover:scale-105"
            >
              <div className="text-5xl md:text-6xl font-bold text-blue-500 mb-4">
                {result.metric}
              </div>
              <div className="text-2xl font-semibold text-slate-50 mb-2">
                {result.label}
              </div>
              <div className="text-slate-400">
                {result.description}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-slate-950 p-6 rounded-lg border border-blue-500/30">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-slate-300 mb-1">Dramatic cost reduction</p>
              <p className="text-sm text-slate-400">Lower operational expenses</p>
            </div>
            <div>
              <p className="text-slate-300 mb-1">Manual labor reduction</p>
              <p className="text-sm text-slate-400">Free up your team</p>
            </div>
            <div>
              <p className="text-slate-300 mb-1">Faster scaling</p>
              <p className="text-sm text-slate-400">With fewer engineering needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

