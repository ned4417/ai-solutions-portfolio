import { useScrollAnimation, getStaggerDelay } from "@/hooks/useScrollAnimation";

const ProjectsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();

  const projects = [
    // Featured AI Solutions Projects (moved to top)
    {
      title: "AI Document Assistant",
      description:
        "AI-powered chat assistant enabling employees to retrieve company documents, forms, policies, and procedures through natural language. Features streaming responses, conversation history, and enterprise SSO authentication.",
      tags: ["FastAPI", "Azure AI Foundry", "React", "Azure Search", "Microsoft Graph"],
      gradient: "from-primary/20 to-accent/20",
    },
    {
      title: "Clinical Decision Support Platform",
      description:
        "Browser extension and backend services for clinical staff providing AI-powered insights, discharge summaries, and care gap analysis integrated with EHR systems. Real-time streaming with OCR document processing.",
      tags: ["Node.js", "FastAPI", "Chrome Extension", "Azure Document Intelligence", "EHR API"],
      gradient: "from-accent/20 to-primary/20",
    },
    {
      title: "Document Review & Approval System",
      description:
        "SharePoint-integrated application for healthcare document management with approval workflows, service-line organization, role-based access, and status tracking across multiple review stages.",
      tags: ["React", "Express", "SharePoint", "Microsoft Graph", "Azure AD"],
      gradient: "from-primary/20 to-accent/20",
    },
    {
      title: "Internal SDK Library",
      description:
        "Monorepo SDK providing standardized packages for EHR integration, Azure and on-premises SQL connectivity, and shared service utilities including auth, logging, and health checks.",
      tags: ["TypeScript", "Turborepo", "EHR API", "Azure SQL", "npm packages"],
      gradient: "from-accent/20 to-primary/20",
    },
    {
      title: "Appointment Scheduling Platform",
      description:
        "Comprehensive scheduling application for healthcare navigators with EHR integration, provider scope validation, multi-system data aggregation, and complex scheduling rules for medical and dental appointments.",
      tags: ["React", "Node.js", "EHR API", "Snowflake", "Google Maps API"],
      gradient: "from-primary/20 to-accent/20",
    },
    {
      title: "Employee Recognition & Directory",
      description:
        "Campaign management system with nomination workflows, multi-tier approvals, voting, AI-powered summarization, and Excel exports with embedded photos. Integrates with enterprise directory services.",
      tags: ["React", "Express", "Azure AI Foundry", "Microsoft Graph", "SQL Server"],
      gradient: "from-accent/20 to-primary/20",
    },
    // Other Projects
    {
      title: "Healthcare EHR Automation System",
      description:
        "Enterprise automation platform integrating with AthenaHealth EHR. Automated chart alert processing reducing manual workload by hundreds of hours monthly. Reduced manual chart processing time by 80%.",
      tags: ["Node.js", "TypeScript", "React", "AthenaHealth API", "Playwright"],
      gradient: "from-primary/20 to-accent/20",
    },
    {
      title: "AI-Powered Database Chat",
      description:
        "Natural language to SQL generation system using GPT-4 with RAG patterns. Enables non-technical users to query databases using conversational AI with vector search.",
      tags: ["Azure AI Foundry", "LLM", "Blazor", "Vector Search", "RAG"],
      gradient: "from-accent/20 to-primary/20",
    },
    {
      title: "DevOps & Infrastructure Automation",
      description:
        "Ansible playbooks and GitHub Actions workflows for automated container deployments to Azure. Reduced deployment time from hours to minutes.",
      tags: ["Ansible", "Docker", "GitHub Actions", "Azure ACR", "Azure"],
      gradient: "from-accent/20 to-primary/20",
    },
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-16 scroll-animate ${headerVisible ? "visible" : ""}`}
        >
          <span className="font-mono text-primary text-sm mb-4 block">
            // Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Projects That Made an{" "}
            <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Multiple production applications across healthcare, AI/ML, and business intelligence
          </p>
        </div>

        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition-all duration-500 overflow-hidden scroll-animate-scale ${projectsVisible ? "visible" : ""}`}
              style={projectsVisible ? getStaggerDelay(index) : {}}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono bg-secondary rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
