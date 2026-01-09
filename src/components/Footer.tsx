const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex justify-center items-center">
          <div className="font-mono text-sm text-muted-foreground">
            &lt;SE /&gt; © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
