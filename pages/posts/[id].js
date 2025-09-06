import { fetchPostById } from '../../lib/api'
import SEO from '../../components/SEO'

export default function PostPage({ post }) {
  if (!post) return <div className="container">Post not found</div>

  return (
    <>
      <SEO title={post.title} description={post.excerpt} />
      <article className="bg-white p-6 rounded-lg shadow-sm">
        <img src={post.cover} alt="" className="w-full h-64 object-cover rounded" />
        <h1 className="text-3xl font-bold mt-4">{post.title}</h1>
        <div className="text-sm text-gray-500 mt-2">{post.author} • {post.readTime}</div>
        <div className="mt-6 prose max-w-none" dangerouslySetInnerHTML={{ __html: post.body }} />
      </article>
    </>
  )
}

export async function getServerSideProps({ params }) {
  try {
    const post = await fetchPostById(params.id)
    return { props: { post } }
  } catch (e) {
    return { notFound: true }
  }
}
