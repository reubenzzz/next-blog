import { BlogPost } from "@/data/mockData";
import { Button } from "@/components/ui/button";

interface RecentPostsProps {
  posts: BlogPost[];
}

const RecentPosts = ({ posts }: RecentPostsProps) => {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Recent Posts</h2>
        <Button variant="outline">All Posts</Button>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="group cursor-pointer">
            <div className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-all duration-300">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-primary">
                      {post.author.charAt(0)}
                    </span>
                  </div>
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;