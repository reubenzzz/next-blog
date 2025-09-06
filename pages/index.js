import { useState } from 'react'
import { QueryClient, useQuery, dehydrate } from 'react-query'
import { fetchPosts } from '../lib/api'
import PostCard from '../components/PostCard'
import SearchBar from '../components/SearchBar'
import SEO from '../components/SEO'
import { queryClient } from '../lib/queryClient'

export default function Home() {
  const [term, setTerm] = useState('')
  const { data: posts = [], isLoading } = useQuery(['posts', term], () => fetchPosts(term), { keepPreviousData: true })

  return (
    <>
      <SEO title="Home" description="Latest posts from Beyond UI" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <header className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Recent Posts</h1>
            <SearchBar onSearch={setTerm} />
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {isLoading ? <div>Loading...</div> : posts.map(p => <PostCard key={p.id} post={p} />)}
            {(!isLoading && posts.length === 0) && <div className="text-gray-600">No posts found</div>}
          </div>
        </div>

        <aside className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="font-semibold mb-3">Other featured posts</h2>
          {/* could map featured posts */}
          <ul className="space-y-3 text-sm text-gray-700">
            <li>Revolutionizing industries through SaaS implementation</li>
            <li>Synergizing saas and UX design</li>
          </ul>
        </aside>
      </div>
    </>
  )
}

// Server-side fetch for initial HTML (SSR)
export async function getServerSideProps(context) {
  const qClient = new QueryClient()
  // prefetch initial list (no search)
  await qClient.prefetchQuery(['posts', ''], () => fetchPosts(''))
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(qClient))) // pass initial state
    }
  }
}
