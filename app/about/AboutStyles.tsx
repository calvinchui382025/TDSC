"use client"

// import react from "react"
import styled from "@emotion/styled"
import { greyColorCustomLight, mainGradient } from "app/utils"
import { Button } from "@mui/material"

export const AboutRoot = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  marginTop: '10vh',
  position: 'absolute',
})

export const BiosGrid = styled('div')({
  width: '80%',
  position: 'relative',
  top: -100,
  justifyItems: 'center',
  paddingTop: '2rem',
  paddingBottom: '2rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  '@media (max-width: 768px)': {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
})

export const BiosCard = styled('div')({
  backgroundColor: greyColorCustomLight,
  padding: '12px',
  width: '60%',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  marginBottom: '1rem',
  '&:hover': {
    border: '1px solid rgb(37, 83, 185)',
    transition: 'all 0.2s ease-in-out',
  },
})

export const WhoWeAreContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: '5vh',
  marginBottom: '5vh',
  gap: '40px',
  minHeight: '40vh',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
  }
})

export const AboutImage = styled('img')({
  width: '30%',
  padding: '2px',
  background: mainGradient,
  borderRadius: '12px',
  '@media (max-width: 768px)': {
    width: '70%',
  }
})

export const WhoWeAreTextContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  height: '80%',
  width: '30%',
  '@media (max-width: 768px)': {
    width: '70%',
  },
})

export const WhatWeDoTextContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',
  height: '80%',
  width: '30%',
  '@media (max-width: 768px)': {
    width: '70%',
  }
})

export const StyledDescription = styled('p')({
  fontFamily: 'sans-serif',
  margin: 5,
  color: 'gainsboro',
})

export const StyledTitle = styled('h3')({
  fontFamily: 'sans-serif',
  margin: 5,
  color: 'gainsboro',
})

export const StyledName = styled('h2')({
  fontFamily: 'sans-serif',
  margin: 5,
  color: 'gainsboro',
})

export const AboutButton = styled(Button)({
  color: 'gainsboro',
  fontWeight: 'bold',
  backgroundColor: 'grey',
  border: '2px solid',
  backgroundImage: mainGradient,
})