import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <header className="bg-white shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/"><a className="text-xl font-bold">Beyond UI</a></Link>
          <nav aria-label="primary">
            <ul className="flex gap-4">
              <li><Link href="/"><a>Home</a></Link></li>
              <li><a href="#" aria-disabled="true">About</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container py-8">{children}</main>

      <footer className="border-t py-6 mt-8">
        <div className="container text-center text-sm text-gray-600">© {new Date().getFullYear()} Beyond UI</div>
      </footer>
    </>
  )
}
