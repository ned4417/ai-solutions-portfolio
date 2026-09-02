import { ArrowUpRight } from "lucide-react";
import { useScrollAnimation, getStaggerDelay } from "@/hooks/useScrollAnimation";

const ProjectsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();

  const projects = [
    // Featured AI Solutions Projects (moved to top)
    {
      title: "AI Core: LLM Orchestration Platform",
      description:
        "Backend service architecting API and microservice patterns for AI features across clinical applications — orchestrating LLM requests, application context, and structured workflows in a regulated healthcare environment.",
      tags: ["Python", "Node.js", "Azure App Service", "Multi-provider LLM", "Microservices"],
      gradient: "from-primary/20 to-accent/20",
    },
    {
      title: "Document Ingestion Pipeline",
      description:
        "OCR pipeline built on Azure Document Intelligence that turns scanned clinical PDFs into structured, LLM-ready data — the foundation for RAG workflows across AI Core.",
      tags: ["Azure Document Intelligence", "OCR", "Python", "RAG"],
      gradient: "from-accent/20 to-primary/20",
    },
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
        "AI-integrated clinical application that cut patient chart prep time from an hour to a few minutes — real-time streaming insights, discharge summaries, and care-gap analysis integrated with EHR systems.",
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
      title: "Provider Scheduling Engine",
      description:
        "Custom scheduling engine with a rules system serving 300–400 providers across 25 locations — EHR integration, provider scope validation, and multi-system data aggregation for medical and dental appointments.",
      tags: ["React", "Node.js", "EHR API", "Snowflake", "Rules Engine"],
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
    // Personal Projects
    {
      title: "Grub Guide",
      description:
        "Restaurant-picker PWA that randomly selects a nearby spot by location and radius, with Claude-generated \"vibe\" descriptions, live open/closed status, and a cinematic photo carousel. Built solo, deployed on Vercel.",
      tags: ["Personal Project", "React", "TypeScript", "Anthropic API", "Google Places API"],
      gradient: "from-primary/20 to-accent/20",
      link: "https://eats-picker.vercel.app/",
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
            Production AI and healthcare systems at CHAS Health, plus the occasional side project
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

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-4 text-xs font-mono text-primary hover:underline"
                  >
                    View Live
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
