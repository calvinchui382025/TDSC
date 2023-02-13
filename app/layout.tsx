import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <main>
          <nav>
            <Link href='/'>
              Home
            </Link>
            <Link href='/who'>
              Who We Are
            </Link>
            <Link href='/what'>
              What We Do
            </Link>
            <Link href='/proficiency'>
              Proficiency Requirements
            </Link>
            <Link href='/gear'>
              Gear Requirements
            </Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  )
}
