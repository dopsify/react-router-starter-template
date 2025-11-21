export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: "AgentFlow transformed our document processing. We went from 2 weeks to 2-3 days on RFP creation. The AI agents adapt automatically when formats change - no maintenance needed. Game changer.",
    },
    {
      rating: 5,
      text: "Finally, automation that's both intelligent and reliable. The workflow engine gives us control, while the AI agents handle the complexity. We're seeing 5-10x faster and more effective output with 90% less manual work.",
    },
    {
      rating: 5,
      text: "The observability is incredible. Every step is traceable and debuggable. Our AgentFlow deployment is generating $25k+ in monthly value. Best automation investment we've made.",
    },
    {
      rating: 5,
      text: "AgentFlow gets smarter the more it runs. No consultants, no brittle scripts, no manual rework. It just works and keeps improving. This is the future of automation.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-4">
            Trusted by Industry Leaders
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Don't just take our word for it - see how we've helped businesses achieve <span className="font-semibold text-blue-400">90% time reduction</span> and effectiveness improvements
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-950 p-6 rounded-lg border border-slate-800 hover:border-blue-500/50 transition-all transform hover:scale-105 flex flex-col shadow-lg"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-slate-300 mb-6 flex-grow italic leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">Join our growing list of satisfied customers</p>
          <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-50 rounded-lg font-semibold transition-colors">
            Read More Reviews →
          </button>
        </div>
      </div>
    </section>
  );
}

