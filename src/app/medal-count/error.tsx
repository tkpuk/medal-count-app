'use client'
export default function Error({ error }: { error: Error }) {
  return (
    <div
      style={{ margin: '10rem auto', maxWidth: '30rem', textAlign: 'center' }}
    >
      <h2>An error occured</h2>

      <p style={{ padding: '1rem' }}>{error.message}</p>
    </div>
  )
}
