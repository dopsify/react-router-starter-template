export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-slate-50">
            GlueAI
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-slate-300 hover:text-slate-50 transition-colors">
              Use Cases
            </a>
            <a href="#pricing" className="text-slate-300 hover:text-slate-50 transition-colors">
              Pricing
            </a>
            <a href="#integrations" className="text-slate-300 hover:text-slate-50 transition-colors">
              Integrations
            </a>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

