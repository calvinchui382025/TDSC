"use client"

import styled from '@emotion/styled'
import NavBar from './Components/NavBar'
//======================================================
const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
})

//======================================================
export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body 
        style={{
          margin: 0 
        }}
      >
        <Root>
          <NavBar />
          {children}
        </Root>
      </body>
    </html>
  )
}
