import Head from 'next/head'
export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title ? `${title} | Beyond UI` : 'Beyond UI Blog'}</title>
      <meta name="description" content={description || 'A modern blog built with Next.js and Tailwind.'} />
      <meta name="robots" content="index, follow" />
      <link rel="icon" href="/favicon.ico" />
      {/* Open Graph */}
      <meta property="og:title" content={title || 'Beyond UI'} />
      <meta property="og:description" content={description || ''} />
    </Head>
  )
}
