"use client"

import styled from "@emotion/styled"
import { Parallax } from 'react-parallax';

export const CustomParallax = styled(Parallax)({
  position: 'relative',
  width: '100%',
})

export const ParallaxContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  paddingTop: '10vh',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  '@media (max-width: 600px)': {
    paddingTop: '15vh',
  },
  '@media (max-width: 360px)': {
    paddingTop: '20vh',
  },
})

export const ParallaxTitle = styled('h1')({
  fontFamily: 'sans-serif',
  color: 'white',
  fontSize: '3rem',
  textTransform: 'uppercase',
  margin: 0,
  padding: 0,
  '@media (max-width: 1100px)': {
    fontSize: '2.5rem',
  },
  '@media (max-width: 600px)': {
    fontSize: '1.5rem',
  },
  '@media (max-width: 360px)': {
    fontSize: '1rem',
  },
})

export const ParallaxContent = styled('h1')({
  fontFamily: 'sans-serif',
  color: 'white',
  fontSize: '2rem',
  textTransform: 'uppercase',
  margin: 5,
  padding: 5,
  '@media (max-width: 1100px)': {
    fontSize: '1.5rem',
  },
  '@media (max-width: 600px)': {
    fontSize: '1rem',
  },
})