import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProblemSolution from "../components/ProblemSolution";
import UseCases from "../components/UseCases";
import Results from "../components/Results";
import Testimonials from "../components/Testimonials";
import Integrations from "../components/Integrations";
import CTASection from "../components/CTASection";
import Pricing from "../components/Pricing";
import Vision from "../components/Vision";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GlueAI - AgentFlow Automation Platform | Next Gen AI Automation" },
    { name: "description", content: "Deep AI agents that think like humans and execute with the reliability of workflows. Achieve 90% time reduction and effectiveness improvements with AgentFlow." },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <UseCases />
        <Results />
        <Testimonials />
        <Integrations />
        <CTASection />
        <Pricing />
        <Vision />
      </main>
      <Footer />
    </div>
  );
}
