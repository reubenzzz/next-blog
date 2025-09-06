import Link from 'next/link'
export default function PostCard({ post }) {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden" aria-labelledby={`post-${post.id}`}>
      <img src={post.cover} alt={post.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 id={`post-${post.id}`} className="text-lg font-semibold"><Link href={`/posts/${post.id}`}><a>{post.title}</a></Link></h3>
        <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
        <div className="mt-3 text-xs text-gray-500">{post.author} • {post.readTime}</div>
      </div>
    </article>
  )
}
