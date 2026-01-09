import { GraduationCap, Award, BadgeCheck } from "lucide-react";
import { useScrollAnimation, getStaggerDelay } from "@/hooks/useScrollAnimation";

const EducationSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: eduRef, isVisible: eduVisible } = useScrollAnimation();
  const { ref: certRef, isVisible: certVisible } = useScrollAnimation();

  const education = [
    {
      degree: "B.S. Information Technology",
      school: "WGU Washington",
      year: "",
      focus: "Information Systems",
    },
    {
      degree: "A.A.S. Software Development",
      school: "Spokane Community College",
      year: "",
      focus: "Programming & Application Development",
    },
  ];

  const certifications = [
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      icon: "🔐",
    },
    {
      name: "CompTIA Network+",
      issuer: "CompTIA",
      icon: "🌐",
    },
    {
      name: "CompTIA Project+",
      issuer: "CompTIA",
      icon: "📊",
    },
    {
      name: "PL-900 Power Platform Fundamentals",
      issuer: "Microsoft",
      icon: "☁️",
    },
  ];

  return (
    <section id="education" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-subtle" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-16 scroll-animate ${headerVisible ? "visible" : ""}`}
        >
          <span className="font-mono text-primary text-sm mb-4 block">
            // Credentials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Education &{" "}
            <span className="text-gradient">Certifications</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>

            <div ref={eduRef} className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={edu.degree}
                  className={`p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors scroll-animate ${eduVisible ? "visible" : ""}`}
                  style={eduVisible ? getStaggerDelay(index) : {}}
                >
                  <h4 className="font-semibold text-lg mb-1">{edu.degree}</h4>
                  <p className="text-muted-foreground mb-1">{edu.school}</p>
                  <p className="text-sm text-muted-foreground/70">Focus: {edu.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>

            <div ref={certRef} className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className={`p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors flex items-center gap-4 scroll-animate ${certVisible ? "visible" : ""}`}
                  style={certVisible ? getStaggerDelay(index) : {}}
                >
                  <div className="text-2xl">{cert.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{cert.name}</h4>
                      <BadgeCheck className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
