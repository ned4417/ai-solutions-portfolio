import { Brain, Cloud, Code2, Shield } from "lucide-react";
import { useScrollAnimation, getStaggerDelay } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  const expertiseAreas = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "React, TypeScript, Python, Node.js, REST APIs, SQL",
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Azure, Docker, CI/CD pipelines, containerization",
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "LLM/OpenAI integration, RAG systems, vector search, automation",
    },
    {
      icon: Shield,
      title: "Enterprise Systems",
      description: "Scalable APIs, data pipelines, SSO/OAuth, production systems",
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
                Full-stack software engineer building enterprise applications.
                I create scalable web applications, distributed systems,
                and AI-powered solutions that automate workflows and boost productivity.
              </p>
              <p>
                I've architected production applications serving thousands of users,
                including automation systems that save hundreds of hours monthly and AI-powered
                document assistants that transformed how employees access company knowledge.
              </p>
              <p>
                I'm passionate about leveraging emerging AI technologies (LLMs, RAG patterns)
                to create intuitive tools that help teams focus on what matters most.
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
