import Link from 'next/link'

export default function NoFound() {
  return (
    <div
      style={{ margin: '10rem auto', maxWidth: '30rem', textAlign: 'center' }}
    >
      <h1>404</h1>
      <h4>Not Found</h4>
      <p style={{ padding: '1rem' }}>
        The resource requested could not be found on server!
      </p>
      <p style={{ padding: '2rem' }}>
        <Link href='/'>Go to Home</Link>
      </p>
    </div>
  )
}
