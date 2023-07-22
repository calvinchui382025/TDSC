"use client"

import react from "react"
import styled from "@emotion/styled"
import { greyColorCustomDark, greyColorCustomLight, mainGradient } from "app/utils"
import { Button } from "@mui/material"

export const JoinRoot = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  marginTop: '5rem',
  color: 'white',
  backgroundColor: 'rgb(34,38,41)',
})

export const JoinHeader = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
  textAlign: 'center',
  backgroundColor: 'rgb(34,38,41)',
  width: '70%',
  height: '35vh',
  '@media (max-width: 600px)': {
    width: '90%',
  },
})

export const JoinHeaderContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
  textAlign: 'center',
})

export const JoinPrimaryTypography = styled('h1')({
  fontFamily: 'sans-serif',
  color: 'gainsboro',
  fontSize: '2rem',
  width: '100%',
  margin: 5,
  padding: 0,
  '@media (max-width: 1100px)': {
    fontSize: '1.5rem',
    // width: '75%',
  },
  '@media (max-width: 600px)': {
    fontSize: '1rem',
    // width: '90%',
  },
})

export const JoinSecondaryTypography = styled('h1')({
  fontFamily: 'sans-serif',
  color: 'gainsboro',
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

export const Learnmorecontainer = styled('div')({
  overflow: 'hidden',
  width: '100%',
  height: '60vh',
  backgroundColor: 'rgb(34,38,41)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  '& > Button': {
    backgroundColor: 'transparent',
    border: 'none',
    fontFamily: 'sans-serif',
    fontColor: 'gainsboro',
    fontSize: '2rem',
    margin: 5,
    paddingLeft: 25,
    '@media (max-width: 1100px)': {
      fontSize: '1.5rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem',
    },
  },
  '& > .testDiv': {
    border: '1px solid gainsboro',
    padding: '10px',
    width: '70%',
    '& > h1': {
      fontFamily: 'sans-serif',
      fontColor: mainGradient,
      fontSize: '2rem',
      '@media (max-width: 1100px)': {
        fontSize: '1.5rem',
      },
      '@media (max-width: 600px)': {
        fontSize: '1rem',
      },
    },
  }
})

export const RangeCard = styled('div')({
  marginBottom: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  borderRadius: '12px',
  border: '1px solid gainsboro',
  '&:hover': {
    border: '1px solid rgb(52,124,245)',
  },
  padding: '20px 30px 20px 30px',
  width: '50%',
  '@media (max-width: 1100px)': {
    width: '60%',
  },
  '@media (max-width: 600px)': {
    width: '70%',
  },
  '& > h1': {
    fontFamily: 'Arial Narrow, sans-serif',
    color: 'rgb(52,124,245)',
    lineHeight: '1.5rem',
    letterSpacing: '0px',
    fontSize: '2rem',
    margin: 10,
    '@media (max-width: 1100px)': {
      fontSize: '1.75rem',
      margin: 8,
    },
    '@media (max-width: 600px)': {
      fontSize: '1.25rem',
      margin: 5,
    },
  },
  '& > button': {
    color: 'gainsboro',
    fontWeight: 'bold',
    backgroundColor: 'rgb(52,124,245)',
    border: 'none',
    borderRadius: 'none',
    backgroundImage: 'rgb(52,124,245)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
    marginLeft: 10,
    marginTop: 10,
    //hover
    '&:hover': {
      backgroundColor: 'rgb(52,124,245)',
      filter: 'brightness(0.8)',
    },
    cursor: 'pointer',
    '@media (max-width: 1100px)': {
      marginLeft: 8,
      marginTop: 8,
      padding: '12px',
    },
    '@media (max-width: 600px)': {
      marginLeft: 5,
      marginTop: 5,
      padding: '8px',
    },
  },
})

export const RangeCardSubText = styled('h1')({
  margin: 10,
  fontFamily: 'Arial Narrow, sans-serif',
  color: 'rgb(118,119,111)',
  fontSize: '1.5rem',
  '@media (max-width: 1100px)': {
    fontSize: '1rem',
    margin: 8,
  },
  '@media (max-width: 600px)': {
    fontSize: '0.95rem',
    margin: 5,
  },
})

export const JoinStyledButton = styled(Button)({
  color: 'gainsboro',
  fontWeight: 'bold',
  backgroundColor: 'rgb(52,124,245)',
  border: 'none',
  borderRadius: 'none',
  backgroundImage: 'rgb(52,124,245)',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '12px',
  marginLeft: 10,
  marginTop: 10,
  '&:hover': {
    backgroundColor: 'rgb(52,124,245)',
    filter: 'brightness(0.8)',
  },
  cursor: 'pointer',
  '@media (max-width: 1100px)': {
    marginLeft: 8,
    marginTop: 8,
    padding: '12px',
  },
  '@media (max-width: 600px)': {
    marginLeft: 5,
    marginTop: 5,
    padding: '8px',
  },
})