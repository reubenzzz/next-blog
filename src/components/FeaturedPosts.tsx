import { BlogPost } from "@/data/mockData";

interface FeaturedPostsProps {
  posts: BlogPost[];
}

const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  return (
    <aside className="lg:col-span-1">
      <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
        <h3 className="text-xl font-semibold text-foreground mb-6">
          Other featured posts
        </h3>
        
        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2 mb-2">
                    {post.title}
                  </h4>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FeaturedPosts;
