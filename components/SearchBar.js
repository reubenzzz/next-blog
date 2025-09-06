import { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState('')
  return (
    <form className="mb-6" onSubmit={(e) => { e.preventDefault(); onSearch(q); }}>
      <label htmlFor="search" className="sr-only">Search posts</label>
      <div className="flex gap-2">
        <input id="search" value={q} onChange={e=>setQ(e.target.value)} className="flex-1 border rounded px-3 py-2" placeholder="Search posts..." />
        <button className="bg-indigo-600 text-white px-4 rounded">Search</button>
      </div>
    </form>
  )
}
