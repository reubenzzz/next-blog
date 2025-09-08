import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 to-primary/10 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                Business
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Unlocking Business Efficiency with{" "}
              <span className="text-primary">SaaS Solutions</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover how modern SaaS platforms are revolutionizing business operations, 
              streamlining workflows, and driving unprecedented growth across industries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Professional team collaborating on SaaS solutions"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;