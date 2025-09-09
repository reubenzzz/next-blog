// Mock data simulating API responses
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
}

export const featuredPosts: BlogPost[] = [
  {
    id: 1,
    title: "Revolutionizing Industries through SaaS Implementation",
    excerpt: "Discover how modern SaaS solutions are transforming traditional business models across various industries.",
    author: "Jennifer Taylor",
    readTime: "5 min read",
    category: "Business",
    image: "@/assets/blog-ui-design.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Synergizing SaaS and UX design for elevating digital experiences",
    excerpt: "Learn how to create seamless user experiences that drive business growth and customer satisfaction.",
    author: "Jennifer Taylor",
    readTime: "4 min read",
    category: "Design",
    image: "/src/assets/blog-collaboration.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Navigating SaaS waters with intuitive UI and UX",
    excerpt: "Master the art of creating intuitive interfaces that users love and businesses depend on.",
    author: "Ryan A.",
    readTime: "3 min read",
    category: "UX",
    image: "/src/assets/blog-emotional-ux.jpg",
    featured: true
  },
  {
    id: 4,
    title: "Sculpting SaaS success - the art of UI and UX design",
    excerpt: "Explore advanced techniques for crafting beautiful and functional SaaS interfaces.",
    author: "Jennifer Taylor",
    readTime: "6 min read",
    category: "Design",
    image: "/src/assets/blog-ui-design.jpg",
    featured: true
  },
  {
    id: 5,
    title: "Transforming SaaS platforms - a UI/UX design odyssey",
    excerpt: "Journey through the complete process of redesigning enterprise SaaS platforms.",
    author: "Ryan A.",
    readTime: "2 min read",
    category: "Case Study",
    image: "/src/assets/blog-collaboration.jpg",
    featured: true
  }
];

export const recentPosts: BlogPost[] = [
  {
    id: 6,
    title: "Mastering UI Elements: A Practical Guide for Designers",
    excerpt: "Dive into the world of user interface design with our expert guides, latest trends, and practical tips.",
    author: "Jennifer Taylor",
    readTime: "3 min read",
    category: "Design",
    image: "/src/assets/blog-ui-design.jpg"
  },
  {
    id: 7,
    title: "Crafting Seamless Experiences: The Art of Intuitive UI Design",
    excerpt: "Explore the principles and techniques that drive user-centric UI design, ensuring a seamless and intuitive experience.",
    author: "Jennifer Taylor",
    readTime: "5 min read",
    category: "UX",
    image: "/src/assets/blog-collaboration.jpg"
  },
  {
    id: 8,
    title: "Beyond Aesthetics: The Power of Emotional UX Design",
    excerpt: "Delve into the realm of emotional design and discover how incorporating empathy and psychology can create truly impactful user experiences.",
    author: "Ryan A.",
    readTime: "2 min read",
    category: "Psychology",
    image: "/src/assets/blog-emotional-ux.jpg"
  }
];
