"use client"

import react from "react"
import styled from "@emotion/styled"

export const AboutRoot = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  marginTop: '5rem',
  // backgroundColor: 'gainsboro',
  // border: '1px solid white',
})

export const BiosGrid = styled('div')({
  paddingTop: '2rem',
  paddingBottom: '2rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '10px',
  '@media (max-width: 768px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@media (max-width: 480px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
})

export const BiosCard = styled('div')({
  backgroundColor: 'white',
  padding: '20px',
})

export const WhoWeAreContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '40px',
  height: '40vh',
})