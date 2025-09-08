import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedPosts from "@/components/FeaturedPosts";
import RecentPosts from "@/components/RecentPosts";
import { featuredPosts, recentPosts } from "@/data/mockData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <RecentPosts posts={recentPosts} />
            </div>
            
            {/* Sidebar */}
            <FeaturedPosts posts={featuredPosts} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
