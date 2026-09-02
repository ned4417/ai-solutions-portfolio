import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/ned4417" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/eddie-tuell-9387b258" },
    { icon: Mail, label: "Email", href: "mailto:eddietuell@gmail.com" },
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center scroll-animate ${isVisible ? "visible" : ""}`}
        >
          <span className="font-mono text-primary text-sm mb-4 block">
            // Let's Connect
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Build Something{" "}
            <span className="text-gradient">Amazing?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Whether you're exploring LLM orchestration for your own product, need someone
            who's shipped AI features in a regulated environment, or just want to talk
            healthcare tech, I'd love to hear from you.
          </p>

          <Button variant="hero" size="xl" className="mb-12" asChild>
            <a href="mailto:eddietuell@gmail.com">
              Get In Touch
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </Button>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
