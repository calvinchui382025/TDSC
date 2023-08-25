"use client"

import styled from "@emotion/styled"
import { mainColor } from "app/utils"

export const ContactRoot = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  color: 'white',
  backgroundColor: mainColor,
  marginTop: '7vh',
  '@media (max-width: 3000px)': {
    marginTop: '7vh',
  },
})

export const ContactHeader = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: mainColor,
  width: '70%',
  height: '25vh',
})

export const ContactPrimaryTypography = styled('h1')({
  fontFamily: 'sans-serif',
  color: 'white',
  fontSize: '2rem',
  width: '60%',
  margin: 5,
  padding: 0,
  '@media (max-width: 1100px)': {
    fontSize: '1.5rem',
    margin: 3,
    width: '75%',
  },
  '@media (max-width: 600px)': {
    fontSize: '1.2rem',
    margin: 0,
    width: '85%',
  },
})

export const ContactSecondaryTypography = styled('h1')({
  fontFamily: 'sans-serif',
  color: 'white',
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