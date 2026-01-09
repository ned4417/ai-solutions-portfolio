import { Briefcase, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ExperienceSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  const experiences = [
    {
      title: "Software Engineer",
      company: "CHAS Health",
      period: "2022 - Present",
      description: "Full-stack development focused on healthcare automation, AI integration, and enterprise applications.",
      highlights: [
        "Designed scalable APIs and microservices with Python & Node.js",
        "Integrated OpenAI for clinical data analysis",
        "Built React applications for healthcare workflows",
        "Automated CI/CD pipelines with GitHub Actions",
      ],
    },
    {
      title: "Systems Engineer II",
      company: "CHAS Health",
      period: "2018 - 2022",
      description: "Infrastructure management, server administration, and technical leadership for healthcare systems.",
      highlights: [
        "Managed virtual infrastructure and systems",
        "Designed server roles and software upgrades",
        "Led disaster recovery planning",
        "Provided escalated technical support",
      ],
    },
    {
      title: "Systems Engineer",
      company: "CHAS Health",
      period: "2016 - 2018",
      description: "System operations, network configurations, and collaborative IT project support.",
      highlights: [
        "Managed network and server administration",
        "Supported infrastructure engineering projects",
        "Virtual environment management",
      ],
    },
    {
      title: "Service Desk Technician",
      company: "CHAS Health",
      period: "2014 - 2016",
      description: "Frontline technical support building foundational IT troubleshooting and customer service skills.",
      highlights: [
        "Provided end-user technical support",
        "Resolved hardware and software issues",
        "Built strong customer service foundation",
      ],
    },
  ];

  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-16 scroll-animate ${headerVisible ? "visible" : ""}`}
        >
          <span className="font-mono text-primary text-sm mb-4 block">
            // Work History
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Professional{" "}
            <span className="text-gradient">Experience</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <TimelineItem key={exp.title + exp.period} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ exp, index }: { exp: any; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

      {/* Content */}
      <div
        className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-8 md:pl-0 scroll-animate ${isVisible ? "visible" : ""}`}
        style={{ transitionDelay: "100ms" }}
      >
        <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
          <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold">{exp.company}</span>
          </div>
          <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
          <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
            <Calendar className="w-3 h-3" />
            {exp.period}
          </div>
          <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
          <ul className={`space-y-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
            {exp.highlights.map((highlight: string) => (
              <li key={highlight} className="text-sm text-muted-foreground">
                <span className="text-primary">→</span> {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block md:w-1/2" />
    </div>
  );
};

export default ExperienceSection;
