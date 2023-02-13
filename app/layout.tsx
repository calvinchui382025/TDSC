"use client"

import styled from '@emotion/styled'
import NavBar from './Components/NavBar'
import Image from 'next/image'

//======================================================
const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  backgroundImages: 'url(/backgroundimage2.jpeg)',
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
          <div style={{position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh'}}>
            <Image
            src={'/backgroundimage2.jpeg'}
            alt='image'
            quality={100}
            fill
            />
          </div>
          {children}
        </Root>
      </body>
    </html>
  )
}
