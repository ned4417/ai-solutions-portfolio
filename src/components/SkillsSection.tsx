import { Brain, Code2, Monitor, Cloud, Database } from "lucide-react";
import { useScrollAnimation, getStaggerDelay } from "@/hooks/useScrollAnimation";

const SkillsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();
  const { ref: techRef, isVisible: techVisible } = useScrollAnimation();

  const skillCategories = [
    {
      icon: Brain,
      title: "AI/LLM",
      description:
        "Architected AI Core's LLM orchestration layer and a RAG pipeline that turns OCR'd clinical PDFs into structured data for a regulated healthcare app.",
      tags: ["RAG", "Multi-Provider LLM", "Azure Document Intelligence", "Prompt Engineering"],
    },
    {
      icon: Code2,
      title: "Backend",
      description:
        "Built ~200 production API endpoints across Python and Node.js microservices powering clinical workflows.",
      tags: ["Python / FastAPI", "Node.js / Express", "REST API Design", "Microservices"],
    },
    {
      icon: Monitor,
      title: "Frontend",
      description:
        "Built the React interfaces clinicians and staff actually use every day, from scheduling tools to AI-powered chart prep.",
      tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    },
    {
      icon: Cloud,
      title: "Cloud/DevOps",
      description:
        "Deployed and automated delivery for every service above on Azure, with CI/CD pipelines that ship changes safely.",
      tags: ["Azure App Service", "Azure Static Web Apps", "GitHub Actions", "Azure DevOps"],
    },
    {
      icon: Database,
      title: "Data",
      description:
        "Integrated clinical and business data across Azure SQL, Snowflake, SharePoint, and EHR systems into a single reliable source of truth.",
      tags: ["Azure SQL", "Snowflake", "SharePoint", "EHR Systems"],
    },
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-subtle" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-16 scroll-animate ${headerVisible ? "visible" : ""}`}
        >
          <span className="font-mono text-primary text-sm mb-4 block">
            // Technical Skills
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Tools of the{" "}
            <span className="text-gradient">Trade</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AI orchestration and full-stack expertise across Python, TypeScript, and Azure's cloud-native stack
          </p>
        </div>

        <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 scroll-animate-scale ${skillsVisible ? "visible" : ""}`}
              style={skillsVisible ? getStaggerDelay(index) : {}}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{category.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-mono bg-secondary rounded-full text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Logos */}
        <div
          ref={techRef}
          className={`mt-20 scroll-animate ${techVisible ? "visible" : ""}`}
        >
          <p className="text-center text-sm text-muted-foreground mb-8 font-mono">
            Technologies I work with daily
          </p>
          <div className="flex flex-wrap justify-center gap-4 opacity-60">
            {["React", "TypeScript", "Python", "Node.js", "Azure", "Snowflake", "RAG", "LLM Orchestration", "GitHub Actions", "Azure DevOps"].map(
              (tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 bg-secondary/50 rounded-lg font-mono text-sm"
                >
                  {tech}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
