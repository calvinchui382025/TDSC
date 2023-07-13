"use client"

import react from "react"
import styled from "@emotion/styled"

export const JoinRoot = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  marginTop: '5rem',
  color: 'white',
  backgroundColor: 'black',
})

export const JoinPrimaryTypography = styled('h1')({
  fontFamily: 'sans-serif',
  color: 'grey',
  fontSize: '2rem',
  margin: 5,
  padding: 0,
  '@media (max-width: 1100px)': {
    fontSize: '1.5rem',
  },
  '@media (max-width: 600px)': {
    fontSize: '1.2rem',
  },
})

export const JoinSecondaryTypography = styled('h1')({
  fontFamily: 'sans-serif',
  color: 'grey',
  fontSize: '1.5rem',
  width: '60%',
  margin: 20,
  padding: 0,
  '@media (max-width: 1100px)': {
    width: '80%',
    fontSize: '1rem',
  },
  '@media (max-width: 600px)': {
    width: '95%',
    fontSize: '0.9rem',
  },
})