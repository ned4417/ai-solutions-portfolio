import { useScrollAnimation, getStaggerDelay } from "@/hooks/useScrollAnimation";

const SkillsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();
  const { ref: techRef, isVisible: techVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: "Full-Stack Development",
      skills: [
        { name: "TypeScript / JavaScript", level: 95 },
        { name: "React (Vite, Tailwind)", level: 92 },
        { name: "Node.js / Express", level: 90 },
        { name: "Python (FastAPI)", level: 90 },
        { name: "SQL Server / Snowflake", level: 88 },
      ],
    },
    {
      title: "Cloud & Infrastructure",
      skills: [
        { name: "Azure (App Service, SQL, AI)", level: 92 },
        { name: "Docker / Containers", level: 88 },
        { name: "GitHub Actions / CI/CD", level: 90 },
        { name: "Ansible / Automation", level: 85 },
        { name: "Azure Static Web Apps", level: 88 },
      ],
    },
    {
      title: "AI Integration",
      skills: [
        { name: "LLM Integration", level: 92 },
        { name: "RAG Systems", level: 90 },
        { name: "Vector Search & Embeddings", level: 88 },
        { name: "Prompt Engineering", level: 92 },
        { name: "Azure Document Intelligence", level: 85 },
      ],
    },
    {
      title: "Enterprise Integrations",
      skills: [
        { name: "REST API Design", level: 92 },
        { name: "Microsoft Graph API", level: 88 },
        { name: "OAuth 2.0 / SSO", level: 90 },
        { name: "SharePoint Integration", level: 85 },
        { name: "Chrome Extension Dev", level: 82 },
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
            Full-stack expertise across modern JavaScript/TypeScript, Python, and cloud-native technologies
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
            {["React", "TypeScript", "Python", "Node.js", "REST APIs", "SQL", "Docker", "Azure", "OpenAI", "CI/CD", "FastAPI", "Cloud"].map(
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
