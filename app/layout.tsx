"use client"

import styled from '@emotion/styled'
import NavBar from './Components/NavBar'
import Image from 'next/image'

//======================================================
const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  // width: '100vw',
  height: '100vh',
  backgroundImages: 'url(/backgroundimage2.jpeg)',
  // minHeight: '100vh',
})

//======================================================
export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body style={{ margin: 0 }}>
        <Root>
          <NavBar />
          {children}
        </Root>
      </body>
    </html>
  )
}
