// Minimal test page - no client components, no hooks, no animations
export default function TestPage() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      color: 'white',
      padding: '40px',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>
        Mobile Test Page
      </h1>
      <p style={{ color: '#888', marginBottom: '20px' }}>
        If you can see this, basic Next.js rendering works.
      </p>
      <a
        href="/"
        style={{
          color: '#0070f3',
          textDecoration: 'underline'
        }}
      >
        Go to Homepage
      </a>
    </main>
  );
}
