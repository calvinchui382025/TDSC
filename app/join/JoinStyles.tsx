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
  // textTransform: 'uppercase',
  margin: 5,
  padding: 0,
})

export const JoinSecondaryTypography = styled('h1')({
  fontFamily: 'sans-serif',
  color: 'grey',
  fontSize: '1.5rem',
  width: '60%',
  // textTransform: 'uppercase',
  margin: 20,
  padding: 0,
})