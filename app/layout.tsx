"use client"

import styled from '@emotion/styled'
import NavBar from './Components/NavBar'
//======================================================
const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  // minHeight: '100vh',
})
//======================================================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <Root>
          <NavBar />
          {/* <nav>
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
          </nav> */}
          {children}
        </Root>
      </body>
    </html>
  )
}
