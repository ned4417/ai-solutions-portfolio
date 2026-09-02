import { Brain, Cloud, Code2, Shield } from "lucide-react";
import { useScrollAnimation, getStaggerDelay } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  const expertiseAreas = [
    {
      icon: Brain,
      title: "AI/LLM Orchestration",
      description: "RAG pipelines, multi-provider LLM integration, Azure Document Intelligence",
    },
    {
      icon: Code2,
      title: "Backend & APIs",
      description: "Python, Node.js, ~200 production endpoints, microservices",
    },
    {
      icon: Shield,
      title: "Healthcare Systems",
      description: "EHR integration, Azure SQL, Snowflake, SharePoint",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Azure App Service, Static Web Apps, GitHub Actions, Azure DevOps",
    },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-subtle" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            ref={headerRef}
            className={`scroll-animate-left ${headerVisible ? "visible" : ""}`}
          >
            <span className="font-mono text-primary text-sm mb-4 block">
              // About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Building Enterprise Solutions with{" "}
              <span className="text-gradient">Intelligent Systems</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a Full Stack Software Engineer II at CHAS Health, with 12+ years of
                experience spanning systems engineering, full-stack development, and now
                AI/backend engineering. I was promoted in August 2026 after leading our
                first AI-integrated clinical application end to end.
              </p>
              <p>
                My current focus is <strong className="text-foreground">AI Core</strong> —
                an internal service that orchestrates LLM requests, application context, and
                structured AI workflows for clinical applications. I also built a document
                ingestion pipeline that uses Azure Document Intelligence (OCR) to turn scanned
                clinical PDFs into structured, LLM-ready data for RAG workflows.
              </p>
              <p>
                Beyond AI work, I've shipped ~200 API endpoints across Python and Node.js
                microservices, a custom scheduling engine serving 300–400 providers across
                25 locations, and I mentor engineers on API design and production-quality
                practices.
              </p>
            </div>
          </div>

          {/* Right - Expertise Cards */}
          <div ref={cardsRef} className="grid sm:grid-cols-2 gap-4">
            {expertiseAreas.map((area, index) => (
              <div
                key={area.title}
                className={`group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 scroll-animate-scale ${cardsVisible ? "visible" : ""}`}
                style={cardsVisible ? getStaggerDelay(index) : {}}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <area.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
