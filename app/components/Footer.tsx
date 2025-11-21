export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-slate-50 mb-4">
              GlueAI
            </h3>
            <p className="text-slate-400">
              Next Gen automation platform. Deep AI agents that think like humans and execute with workflow reliability.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-slate-50 mb-4">
              Product
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#features" className="hover:text-slate-50 transition-colors">
                  Use Cases
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-slate-50 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#integrations" className="hover:text-slate-50 transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-slate-50 mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#" className="hover:text-slate-50 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-50 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-50 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-slate-50 mb-4">
              Support
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#" className="hover:text-slate-50 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-50 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-50 transition-colors">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>© {new Date().getFullYear()} GlueAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

