import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = [
    { label: "Homepage", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Features", href: "/features" },
    { label: "Blog", href: "/blog" },
    { label: "Contact us", href: "/contact" },
    { label: "Demo", href: "/demo" }
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-bold text-foreground">Beyond UI</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;