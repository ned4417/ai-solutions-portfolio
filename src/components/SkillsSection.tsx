import { useScrollAnimation, getStaggerDelay } from "@/hooks/useScrollAnimation";

const SkillsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();
  const { ref: techRef, isVisible: techVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: "AI/LLM",
      skills: [
        { name: "RAG (Retrieval-Augmented Generation)", level: 90 },
        { name: "Multi-Provider LLM Integration", level: 92 },
        { name: "Azure Document Intelligence", level: 85 },
        { name: "Prompt Engineering & Orchestration", level: 92 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Python (FastAPI)", level: 90 },
        { name: "Node.js / Express", level: 90 },
        { name: "REST API Design", level: 92 },
        { name: "Microservices Architecture", level: 90 },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React (Vite, Tailwind)", level: 92 },
        { name: "TypeScript", level: 95 },
      ],
    },
    {
      title: "Cloud/DevOps",
      skills: [
        { name: "Azure App Service", level: 92 },
        { name: "Azure Static Web Apps", level: 88 },
        { name: "GitHub Actions", level: 90 },
        { name: "Azure DevOps", level: 85 },
      ],
    },
    {
      title: "Data",
      skills: [
        { name: "Azure SQL", level: 90 },
        { name: "Snowflake", level: 88 },
        { name: "SharePoint", level: 85 },
        { name: "EHR Systems", level: 88 },
      ],
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

        <div ref={skillsRef} className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`p-6 rounded-2xl bg-card border border-border scroll-animate ${skillsVisible ? "visible" : ""}`}
              style={skillsVisible ? getStaggerDelay(index) : {}}
            >
              <h3 className="text-lg font-semibold mb-6 text-gradient">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm font-mono text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-primary rounded-full transition-all duration-1000"
                        style={{ 
                          width: skillsVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100 + 300}ms`
                        }}
                      />
                    </div>
                  </div>
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
