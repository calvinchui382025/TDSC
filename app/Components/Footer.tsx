"use client"

import styled from "@emotion/styled"

const FooterRoot = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  height: '20vh',
  gap: '5rem',
  //nice grey background
  backgroundColor: '#333333',
  '@media (max-width: 600px)': {
    flexDirection: 'column',
  }
})

const FooterLeft = styled('div')({
  display: 'inherit',
  flexDirection: 'column',
  alignItems: 'center',
})

const FooterRight = styled('div')({
  display: 'inherit',
  flexDirection: 'column',
  alignItems: 'center',
})

export const Footer = () => {
  return (
    <FooterRoot>
      <FooterLeft>
        <h3>Texas Defensive Shooting Club</h3>
      </FooterLeft>
      <FooterRight>
        <h3>Navigate the site!</h3>
      </FooterRight>
    </FooterRoot>
  )
}